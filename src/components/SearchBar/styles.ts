import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

export const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.inputBG,
    borderRadius: SIZES.h14,
    width: SIZES.width * 0.9,
    height: SIZES.height * 0.07,
    paddingHorizontal: 20,
  },
  searchWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchInput: {
    flex: 1,
    height: '100%',
  },
  searchIcon: {
    width: SIZES.width * 0.05,
    height: SIZES.height * 0.025,
    resizeMode: 'contain',
    position: 'absolute',
    right: SIZES.width * 0.07,
  },
  filterBtn: {
    width: SIZES.h40,
    height: SIZES.h40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIcon: {
    width: SIZES.width * 0.03,
    height: SIZES.height * 0.07,
    tintColor: COLORS.primary,
  },
});
