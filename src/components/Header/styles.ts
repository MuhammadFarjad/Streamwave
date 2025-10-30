import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SIZES.height * 0.02,
    marginHorizontal: SIZES.width * 0.02,
  },
  sideContainer: {
    width: SIZES.width * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    color: COLORS.black,
    textAlign: 'center',
    ...FONTS.Regular16,
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: SIZES.radius,
  },
  skipButton: {
    backgroundColor: COLORS.inputBG,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SIZES.h8,
    borderRadius: 5,
  },
  skipIcon: {
    color: COLORS.white,
  },
  arrowIcon: {
    resizeMode: 'contain',
    width: SIZES.height * 0.03,
    height: SIZES.height * 0.03,
  },
});
