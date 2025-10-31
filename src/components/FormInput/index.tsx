import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import { FormInputProps } from '../types';
import styles from './styles';
import { COLORS, images, SIZES } from '../../constant';

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  isPassword = false,
  width,
  // height,
  onBlur,
  backgroundColor,
  phoneNumber,
  isDarkMode = false,
  settingEmail = false,
  error,
  borderColor,
  trip,
  editable,
  rightIcon,
  onRightIconPress,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Animated values
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  // Scale animation for input focus
  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: isFocused ? 1.05 : 1,
      useNativeDriver: true,
      friction: 5,
    }).start();
  }, [isFocused]);

  // Rotation animation for password eye icon
  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: isPasswordVisible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isPasswordVisible]);

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <Animated.View style={[{ transform: [{ scale: scaleAnim }] }]}>
      <View
        style={[
          styles.inputWrapper,
          {
            width,
            borderRadius: trip ? SIZES.h22 : SIZES.h45,
          },
        ]}
      >
        <TextInput
          style={[
            styles.textInput,
            isFocused && { borderWidth: 1 },
            trip && {
              backgroundColor: COLORS.inputBG,
              color: COLORS.white,
            },
          ]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          secureTextEntry={isPassword && !isPasswordVisible}
          placeholderTextColor={trip ? COLORS.white : COLORS.black}
          keyboardType={phoneNumber ? 'number-pad' : undefined}
          onFocus={() => setIsFocused(true)}
          onEndEditing={() => setIsFocused(false)}
          editable={editable}
        />

        {rightIcon && (
          <TouchableOpacity
            onPress={onRightIconPress}
            style={styles.rightIconContainer}
          >
            <Image source={rightIcon} style={styles.rightIcon} />
          </TouchableOpacity>
        )}

        {isPassword && (
          <TouchableOpacity
            onPress={() => setPasswordVisible(!isPasswordVisible)}
            style={styles.passwordContainer}
          >
            <Animated.Image
              source={images.passwordshow}
              style={[
                styles.passwordIcon,
                { transform: [{ rotate: rotateInterpolate }] },
              ]}
            />
          </TouchableOpacity>
        )}
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </Animated.View>
  );
};

export default FormInput;
