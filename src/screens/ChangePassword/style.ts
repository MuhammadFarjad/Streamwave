import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

export default StyleSheet.create({
  mainParent: {
    backgroundColor: COLORS.darkBlue,
    width: SIZES.width * 1,
    height: SIZES.height * 1,
  },
  parent: {
    alignItems: 'center',
    marginTop: SIZES.h33,
  },
  inputParent: {
    width: SIZES.width * 0.9,
    marginTop: SIZES.h15,
  },
  inputText: {
    color: COLORS.white,
    ...FONTS.Bold15,
    paddingBottom: SIZES.small,
  },
  updateButton: {
    marginTop: SIZES.width * 0.53,
  },
});
