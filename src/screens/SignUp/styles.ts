import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: SIZES.height,
    width: SIZES.width,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  subContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  inputContainer: {
    alignItems: 'center',
  },
  inputText: {
    color: COLORS.white,
    ...FONTS.Bold20,
    marginTop: SIZES.height * 0.022,
    marginBottom: SIZES.height * 0.015,
  },
  checkboxContainer: {
    alignItems: 'center',
  },
  checkbox: {
    width: SIZES.width * 0.06,
    height: SIZES.width * 0.05,
    marginRight: SIZES.width * 0.02,
  },
  buttonCont: {
    marginTop: SIZES.height * 0.06,
  },
  termsText: {
    ...FONTS.Medium14,
    color: COLORS.white,
    width: SIZES.width * 0.87,
    marginTop: SIZES.h8,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SIZES.height * 0.02,
  },
  signupLink: {
    color: COLORS.primary,
    ...FONTS.light13,
  },
  member: {
    color: COLORS.white,
    ...FONTS.light13,
  },
  errorText: {
    textAlign: 'center',
    color: COLORS.red,
    ...FONTS.light12,
  },
  socialCont: {
    marginTop: SIZES.height * 0.02,
  },
  textCont: {
    marginLeft: SIZES.width * 0.07,
  },
});
