import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

export default StyleSheet.create({
  subContainer: {
    alignItems: 'center',
  },
  logo: {
    width: SIZES.width * 0.5,
    height: SIZES.width * 0.5,
    resizeMode: 'contain',
  },
});
