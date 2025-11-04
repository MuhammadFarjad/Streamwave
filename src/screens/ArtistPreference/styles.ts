import { Platform, StyleSheet } from 'react-native';
import { SIZES, COLORS, FONTS } from '../../constant';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    height: SIZES.height,
    width: SIZES.width,
    backgroundColor: COLORS.darkBlue,
  },
  contentCont: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: Platform.OS == 'android' ? 30 : 20,
    left: 0,
    right: 0,
  },
  searchBarCont: {
    marginTop: SIZES.h20,
  },
  cardsCont: {
    marginTop: SIZES.h20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: 200,
  },
});
