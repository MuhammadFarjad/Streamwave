import { StyleSheet } from 'react-native';
import { FONTS, COLORS, SIZES } from '../../constant';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: SIZES.h14,
    width: SIZES.width * 0.9,
    height: SIZES.height * 0.07,
    alignSelf: 'center',
    backgroundColor: COLORS.inputBG,
  },
  formInputContainer: {
    marginLeft: 14,
  },
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: SIZES.width * 0.01,
    marginLeft: 20,
  },
  flag: {
    ...FONTS.Medium18,
  },
  code: {
    ...FONTS.Regular11,
    color: COLORS.white,
    overflow: 'visible',
    marginLeft: 25,
  },
  arrowContainer: {
    position: 'absolute',
    top: '50%',
    left: '14%',
    transform: [{ translateY: -5 }],
  },
  arrowImage: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
  },
  errorText: {
    color: COLORS.red,
    ...FONTS.Bold11,
    marginLeft: SIZES.h12,
  },
});
