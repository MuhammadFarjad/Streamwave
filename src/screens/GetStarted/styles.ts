import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constant';

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: SIZES.width,
    height: SIZES.height,
    resizeMode: 'cover',
  },
  Container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 20,
  },
  text1: {
    color: COLORS.white,
    textAlign: 'center',
    ...FONTS.Bold30,
  },
  text2: {
    color: COLORS.white,
    textAlign: 'center',
    marginTop: 10,
    ...FONTS.light13,
  },
  btnCont: {
    marginTop: 10,
  },
  button: {
    marginTop: 7,
    height: SIZES.height * 0.07,
    width: SIZES.width * 0.9,
    borderColor: COLORS.white,
    borderWidth: 0.7,
    borderRadius: 15,
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: COLORS.black,
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginLeft: 60,
  },
  buttonText: {
    color: COLORS.white,
    ...FONTS.Regular15,
    marginLeft: 30,
    flex: 1,
  },
});
