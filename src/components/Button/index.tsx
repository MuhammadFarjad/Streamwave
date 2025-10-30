import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { GradientButtonProps } from '../types';
import { COLORS, images } from '../../constant';

const GradientButton: React.FC<GradientButtonProps> = ({
  title,
  colors = ['#1852A4', '#69A1DF'],
  start = { x: 0, y: 0.5 },
  end = { x: 1, y: 0.5 },
  gradientStyle,
  textStyle,
  disabled = false,
  disabledColors = ['#cccccc', '#dddddd', '#eeeeee', '#f5f5f5'],
  camera,
  gallery = false,
  cancel = false,
  ...touchableProps
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.7}
      {...touchableProps}
    >
      <LinearGradient
        colors={disabled ? disabledColors : colors}
        start={start}
        end={end}
        style={[styles.defaultGradientStyle, gradientStyle]}
      >
        {camera && <Image source={camera} style={styles.cameraImage} />}
        <Text
          style={[
            styles.defaultTextStyle,
            textStyle,
            gallery && { color: COLORS.black },
            cancel && { color: COLORS.ThemeColor },
          ]}
        >
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;
