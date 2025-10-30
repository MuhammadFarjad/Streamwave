import React from 'react';
import { View } from 'react-native';
import LoaderKit from 'react-native-loader-kit';
import { COLORS } from '../../constant';
import styles from './styles';

const Loader: React.FC = () => {
  return (
    <View style={styles.loaderContainer}>
      <LoaderKit
        color={'#1852A4'}
        name={'LineSpinFadeLoader'}
        style={{ width: 50, height: 50 }}
      />
    </View>
  );
};

export default Loader;
