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
    backgroundColor: COLORS.darkBlue,
  },
  containerCont: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  textContainer: {
    marginTop: SIZES.width * 0.09,
    padding: SIZES.h10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: SIZES.height * 0.05,
    padding: SIZES.h10,
  },
  otpInput: {
    width: SIZES.width * 0.11,
    height: SIZES.height * 0.06,
    borderRadius: SIZES.h15,
    textAlign: 'center',
    color: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  filledOtpInput: {
    borderColor: COLORS.primary,
  },
  buttonContainer: {
    padding: SIZES.h10,
    top: SIZES.height * 0.3,
    alignItems: 'center',
    left: 0,
    right: 0,
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.height * 0.03,
  },
  resendText: {
    color: COLORS.white,
    ...FONTS.light13,
  },
  resendLink: {
    color: COLORS.primary,
    ...FONTS.light13,
    marginLeft: 5,
    textDecorationLine: 'underline',
  },
});
