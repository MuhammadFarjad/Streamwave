import { DevSettings, StyleSheet } from 'react-native';
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
  titleCont: {
    marginLeft: SIZES.width * 0.05,
  },
  subContainer: {
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  linecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: SIZES.width * 0.6,
    alignSelf: 'center',
    marginTop: SIZES.height * 0.035,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: COLORS.white,
  },
  linetext: {
    marginHorizontal: SIZES.width * 0.03,
    ...FONTS.Regular12,
    color: COLORS.white,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.h20,
    gap: SIZES.h40,
  },
  socialButton: {
    paddingHorizontal: SIZES.h18,
    paddingVertical: SIZES.h15,
    backgroundColor: COLORS.inputBG,
    borderRadius: SIZES.h15,
    marginBottom: SIZES.h10,
  },
  icon: {
    width: SIZES.h20,
    height: SIZES.h20,
    resizeMode: 'contain',
  },
  activeButton: {
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SIZES.h10,
  },
  buttonText: {
    color: COLORS.white,
    ...FONTS.Regular11,
    textAlign: 'center',
  },
  // emailText: {
  //     color: COLORS.darkGray,
  //     ...FONTS.Regular12,
  //     textAlign: 'center',
  //     marginTop: SIZES.h20,
  //     marginBottom: SIZES.h10,
  // },
  inputContainer: {
    marginTop: SIZES.h15,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: SIZES.width * 0.01,
    marginBottom: SIZES.h30,
  },
  rememberMeCheckBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    marginLeft: SIZES.width * 0.02,
  },
  forgotPasswordText: {
    color: COLORS.white,
    ...FONTS.light11,
  },
  checkbox: {
    width: SIZES.h20,
    height: SIZES.h20,
  },
  user: {
    ...FONTS.light13,
    color: COLORS.white,
    marginTop: SIZES.h10,
    textAlign: 'center',
  },
  user2: {
    ...FONTS.light13,
    color: COLORS.white,
    marginTop: SIZES.h10,
    textAlign: 'center',
  },
  socialCont: {
    marginTop: SIZES.h20,
  },
});
