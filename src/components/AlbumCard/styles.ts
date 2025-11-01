import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

export default StyleSheet.create({
  container: {
    borderRadius: SIZES.h15,
  },
  image: {
    height: SIZES.height * 0.15,
    width: SIZES.width * 0.3,
    borderRadius: SIZES.h15,
    resizeMode: 'contain',
  },
  txt: {
    ...FONTS.Medium16,
    paddingTop: SIZES.height * 0.01,
    color: COLORS.white,
    paddingLeft: SIZES.width * 0.015,
  },
  txt2: {
    ...FONTS.light12,
    paddingLeft: SIZES.width * 0.02,
    color: COLORS.grayEye,
  },
});
