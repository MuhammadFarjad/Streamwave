import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.height * 0.012,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    color: COLORS.white,
    textAlignVertical: 'center',
    borderColor: COLORS.primary,
    borderRadius: SIZES.h15,
    paddingHorizontal: SIZES.width * 0.05,
    paddingVertical: SIZES.height * 0.02,
    ...FONTS.light13,
  },
  passwordIcon: {
    width: SIZES.width * 0.04,
    height: SIZES.height * 0.09,
    resizeMode: 'contain',
    tintColor: COLORS.primary,
  },
  passwordContainer: {
    position: 'absolute',
    right: SIZES.width * 0.07,
  },
  errorText: {
    color: COLORS.red,
    ...FONTS.Regular9_5,
    marginLeft: SIZES.width * 0.05,
  },
  rightIconContainer: {
    position: 'absolute',
    right: SIZES.h10,
    padding: SIZES.h10,
  },
  rightIcon: {
    width: SIZES.h25,
    height: SIZES.h25,
    resizeMode: 'contain',
  },
});

export default styles;
