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
    bottom: Platform.OS == 'android' ? 40 : 20,
    left: 0,
    right: 0,
  },
  textCont: {
    marginLeft: SIZES.h20,
  },
  searchBarCont: {
    marginTop: SIZES.h20,
  },
  cardsCont: {
    marginTop: SIZES.h20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: SIZES.width * 0.9,
  },
  genreCont: {
    borderRadius: 8,
    margin: 4,
  },
  genreText: {
    padding: 7,
    color: COLORS.white,
    ...FONTS.Regular14,
  },
});
