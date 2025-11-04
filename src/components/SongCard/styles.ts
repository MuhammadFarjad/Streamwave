import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

export default StyleSheet.create({
  container: {
    height: SIZES.height * 0.09,
    width: SIZES.width * 0.9,
    backgroundColor: 'transparent',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    borderBottomWidth: 0.5,
    borderColor: COLORS.grayEye,
  },
  image: {
    height: SIZES.height * 0.07,
    width: SIZES.width * 0.12,
    resizeMode: 'contain',
  },
  titleCont: {
    ...FONTS.Bold12,
    paddingLeft: SIZES.width * 0.025,
    color: COLORS.white,
  },
  bottomCont: {
    flexDirection: 'row',
  },
  line: {
    width: 1,
    height: SIZES.height * 0.015,
    backgroundColor: COLORS.grayEye,
    marginVertical: 3,
    marginHorizontal: 2,
  },
  txt: {
    ...FONTS.Medium11,
    color: COLORS.grayEye,
    paddingHorizontal: SIZES.width * 0.025,
  },
  buttonCont: {
    borderRadius: SIZES.h13,
    backgroundColor: COLORS.primary,
    paddingVertical: 3,
    paddingHorizontal: SIZES.width * 0.025,
  },
  singTxt: {
    ...FONTS.light12,
    color: COLORS.black,
  },
  play: {
    width: SIZES.width * 0.07,
    height: SIZES.height * 0.04,
    resizeMode: 'contain',
  },
});
