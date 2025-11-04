import { Platform, StyleSheet } from 'react-native';
import { SIZES, COLORS, FONTS } from '../../constant';

export default StyleSheet.create({
  podcastCont: {
    marginHorizontal: SIZES.width * 0.042,
    marginVertical: 6,
  },
  podcastImg: {
    height: SIZES.height * 0.12,
    width: SIZES.height * 0.12,
    resizeMode: 'contain',
    borderRadius: 5,
  },
  podcastText: {
    paddingLeft: 5,
    color: COLORS.white,
    ...FONTS.Regular14,
  },
  podcasttype: {
    color: COLORS.grayEye,
    paddingLeft: 5,
  },
});
