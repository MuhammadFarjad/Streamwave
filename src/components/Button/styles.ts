import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

const styles = StyleSheet.create({
  defaultGradientStyle: {
    borderRadius: SIZES.h14,
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.height * 0.065,
    width: SIZES.width * 0.9,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: SIZES.h10,
  },
  defaultTextStyle: {
    color: COLORS.white,
    ...FONTS.Bold15,
  },
  cameraImage: {
    width: SIZES.h25,
    height: SIZES.h25,
    resizeMode: 'contain',
  },
});

export default styles;
