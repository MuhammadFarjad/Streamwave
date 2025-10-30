import React, { useEffect, useRef } from 'react';
import { View, Animated, Image } from 'react-native';
import styles from './styles';
import { images } from '../../constant';
import { LogoContainerProps } from '../types';

const LogoContainer: React.FC<LogoContainerProps> = back => {
  // Create animated values
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    // Run opacity + scale animation in parallel
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [opacity, scale]);

  return (
    <View style={styles.subContainer}>
      <Animated.Image
        source={images.logo}
        style={[
          styles.logo,
          {
            opacity,
            transform: [{ scale }],
          },
        ]}
      />
    </View>
  );
};

export default LogoContainer;
