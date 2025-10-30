import { StyleSheet } from 'react-native';
import { FONTS, COLORS, SIZES } from '../../constant';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.width * 0.03,
    marginBottom: SIZES.height * 0.01,
    borderWidth: 1,
    borderRadius: SIZES.h14,
    width: SIZES.width * 0.9,
    height: SIZES.height * 0.07,
    alignSelf: 'center',
    backgroundColor: COLORS.inputBG,
  },
  formInputContainer: {
    marginLeft: 10,
    marginTop: 10,
  },
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: SIZES.width * 0.01,
  },
  flag: {
    ...FONTS.Medium18,
    marginRight: SIZES.width * 0.07,
  },
  code: {
    ...FONTS.Regular11,
    color: COLORS.white,
    overflow: 'visible',
  },
  arrowContainer: {
    position: 'absolute',
    top: '50%',
    left: '12%',
    transform: [{ translateY: -5 }],
  },
  arrowImage: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
  },
  verticalLine: {
    position: 'absolute',
    top: '35%',
    transform: [{ translateY: -5 }],
    borderLeftWidth: 1,
    borderLeftColor: COLORS.white,
    height: SIZES.height * 0.035,
  },
  errorText: {
    color: COLORS.red,
    ...FONTS.Bold11,
    marginLeft: SIZES.h12,
  },
});
