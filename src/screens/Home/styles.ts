import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

export default StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.darkBlue,
  },
  profileCont: {
    paddingTop: SIZES.height * 0.025,
    paddingHorizontal: SIZES.width * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Cont: {
    flexDirection: 'row',
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
    ...FONTS.Medium14,
    marginTop: -5,
    color: COLORS.white,
  },
  notifCont: {
    backgroundColor: COLORS.inputBG,
    borderRadius: SIZES.h50,
    height: SIZES.height * 0.045,
    width: SIZES.height * 0.045,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image2: {
    height: SIZES.height * 0.02,
    width: SIZES.width * 0.04,
    resizeMode: 'contain',
  },
  contentCont: {
    padding: SIZES.height * 0.02,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: SIZES.width * 0.9,
  },
  titleCont: {
    paddingLeft: SIZES.width * 0.03,
    ...FONTS.Bold16,
    color: COLORS.white,
  },
  listCont: {
    width: SIZES.width * 0.9,
    alignSelf: 'center',
  },
  cardCont: {
    flex: 1,
    marginBottom: 80,
  },
});
