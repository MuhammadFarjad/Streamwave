import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

export default StyleSheet.create({
  profileCont: {
    paddingTop: SIZES.height * 0.025,
    paddingHorizontal: SIZES.width * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Cont: {
    flexDirection: 'row',
  },
  boxCont: {
    backgroundColor: COLORS.inputBG,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: 35,
    height: 35,
    marginTop: 2,
  },
  box: {
    height: 15,
    width: 15,
  },
  image: {
    height: SIZES.height * 0.06,
    width: SIZES.width * 0.12,
    resizeMode: 'contain',
    borderRadius: SIZES.h150,
  },
  textCont: {
    paddingLeft: SIZES.height * 0.01,
    paddingTop: 4,
  },
  text: {
    ...FONTS.light13,
    color: COLORS.white,
  },
  text2: {
    ...FONTS.Bold14,
    marginTop: -5,
    color: COLORS.white,
  },
  iconsCont: {
    flexDirection: 'row',
  },
  iconCont: {
    backgroundColor: COLORS.inputBG,
    borderRadius: SIZES.h50,
    height: SIZES.height * 0.05,
    width: SIZES.height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 3,
  },
  image2: {
    height: SIZES.height * 0.02,
    width: SIZES.width * 0.04,
    resizeMode: 'contain',
  },
});
