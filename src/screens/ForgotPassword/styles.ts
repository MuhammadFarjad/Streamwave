import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

export default StyleSheet.create({
  containerCont: {
    flex: 1,
    backgroundColor: COLORS.darkBlue,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  content: {
    marginTop: SIZES.width * 0.09,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  phoneInputContainer: {
    marginTop: SIZES.h20,
  },
  buttonContainer: {
    marginTop: SIZES.height * 0.35,
  },
});
