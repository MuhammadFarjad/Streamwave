import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkBlue,
  },
  passwordInputContainer: {
    marginTop: SIZES.width * 0.08,
    alignItems: 'center',
  },
  text: {
    color: COLORS.white,
    marginTop: 15,
    marginBottom: 10,
    ...FONTS.Bold20,
  },
  requirementList: {
    marginTop: SIZES.base,
  },
  bulletPoint: {
    ...FONTS.Regular11,
    color: COLORS.darkGray,
    marginBottom: SIZES.base / 2,
    textAlign: 'center',
  },
  requirement: {
    ...FONTS.Regular11,
    color: COLORS.darkGray,
  },
  requirementMet: {
    ...FONTS.Regular11,
  },
  requirementText: {
    flexDirection: 'row',
    marginBottom: SIZES.base,
  },
  buttonContainer: {
    padding: SIZES.h10,
    position: 'absolute',
    bottom: SIZES.height * 0.01,
    left: 0,
    right: 0,
  },
});
