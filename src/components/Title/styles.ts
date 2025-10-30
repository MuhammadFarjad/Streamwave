import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

export default StyleSheet.create({
  text: {
    ...FONTS.light12,
    color: COLORS.white,
  },
  text2: {
    ...FONTS.Bold24,
    marginTop: -5,
    color: COLORS.white,
  },
});
