import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

export default StyleSheet.create({
  artistCont: {
    alignItems: 'center',
    height: SIZES.height * 0.13,
    width: SIZES.width * 0.24,
  },
  artistImg: {
    height: SIZES.height * 0.08,
    width: SIZES.height * 0.08,
    resizeMode: 'contain',
    borderRadius: SIZES.h150,
  },
  artistText: {
    padding: 7,
    color: COLORS.white,
    ...FONTS.Regular14,
    textAlign: 'center',
  },
});
