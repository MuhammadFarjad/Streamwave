import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, images } from '../../constant';
import { HeaderProps } from '../types';
import { goBack } from '../../navigation/Stack/NavigationRef';
import styles from './styles';

const Header: React.FC<HeaderProps> = ({
  title,
  tintColor,
  background = false,
  skip = false,
  share = false,
  showDownload = false,
  onSkipPress,
}) => {
  const onBackPress = () => {
    goBack();
  };

  return (
    <View style={styles.headerContainer}>
      {/* Left Side */}
      <View style={styles.sideContainer}>
        <TouchableOpacity
          style={[
            styles.backButton,
            background && { backgroundColor: COLORS.inputBG },
          ]}
          onPress={onBackPress}
        >
          <Image source={images.backImage} style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>

      {/* Center Title */}
      <View style={styles.titleContainer}>
        <Text
          style={[styles.headerText, background && { color: COLORS.white }]}
          numberOfLines={1}
        >
          {title}
        </Text>
      </View>

      {/* Right Side */}
      <View style={styles.sideContainer}>
        {skip && (
          <TouchableOpacity style={styles.skipButton} onPress={onSkipPress}>
            <Text style={styles.skipIcon}>Skip</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
