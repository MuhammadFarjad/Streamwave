import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { CountryPicker } from 'react-native-country-codes-picker';
import styles from './styles';
import { COLORS, SIZES, images } from '../../constant';
import { PhoneNumberInputProps } from '../types';
import FormInput from '../FormInput';

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  values,
  setFieldValue,
  width,
  background = COLORS.darkGray,
  isDarkMode = false,
  settingEmail = false,
  error,
  touched,
  handleBlur,
}) => {
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [countryCode, setCountryCode] = useState('+1');
  const [flag, setFlag] = useState('🇺🇸');
  const [phoneInput, setPhoneInput] = useState(
    values.phone_number?.replace(countryCode, '') || '',
  );

  const imageWidth = SIZES.width * 0.62;

  const getMarginLeft = () => {
    const baseMargin = 23;
    const adjustmentFactor = countryCode.length * 1.5;
    return baseMargin + adjustmentFactor;
  };

  const handlePhoneNumberChange = (text: string) => {
    setPhoneInput(text);
    const fullPhoneNumber = countryCode + text;
    setFieldValue('phone_number', fullPhoneNumber);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.flagContainer}
        onPress={() => setPickerVisible(true)}
      >
        <Text style={styles.flag}>{flag}</Text>
        <Text style={styles.code}>{countryCode}</Text>
      </TouchableOpacity>

      <View style={styles.formInputContainer}>
        <FormInput
          label="phoneNumber"
          placeholder="Phone Number"
          value={phoneInput}
          onChangeText={handlePhoneNumberChange}
          width={imageWidth}
          phoneNumber={true}
          trip
          onBlur={e => {
            if (handleBlur) {
              handleBlur('phone_number')(e);
            }
          }}
        />
      </View>

      <View style={[styles.verticalLine, { left: `${getMarginLeft()}%` }]} />

      <View style={styles.arrowContainer}>
        <Image source={images.downArrow} style={styles.arrowImage} />
      </View>

      <CountryPicker
        show={isPickerVisible}
        lang="en"
        style={{
          modal: {
            height: SIZES.width * 1.5,
            backgroundColor: COLORS.white,
          },
          countryButtonStyles: {
            backgroundColor: COLORS.white,
          },
          textInput: {
            color: COLORS.black,
            backgroundColor: COLORS.white,
          },
        }}
        pickerButtonOnPress={country => {
          setCountryCode(country.dial_code);
          setFlag(country.flag);
          setPickerVisible(false);
        }}
        onBackdropPress={() => setPickerVisible(false)}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default PhoneNumberInput;
