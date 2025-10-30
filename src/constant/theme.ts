import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
  primary: '#00A3FF',
  secondary: '#1852A4',
  blue: '#69A1DF',
  white: '#FFFFFF',
  black: '#000000',
  inputBG: '#17181C',
  custom_transparent: '#00A3FF33',
  darkBlue: '#090A0E',
  transparent: 'transparent',
  inActiveColor: '#C0C0C0',
  card_background: '#EDEDEE',
  red: 'red',
  ThemeColor: '#C08431',
  subThemeColor: 'rgba(1, 19, 30, 1)',
  buttonColor: 'rgba(0, 218, 255, 1)',
  socialButtonColor: 'rgba(21, 28, 22, 1)',
  facebookButtonColor: 'rgba(60, 90, 141, 1)',
  containerColor: 'rgba(6, 52, 83, 0)',
  PieChartSideColor: '#7086FD',
  PieChartMiddColor: '#6FD195',
  PieChartSideTwoColor: '#FFAE4C',
  borderColor: '#DDDDDD',
  gradientColor: '#01131E',
  brown: '#8B4513',
  green: '#008000',
  gray: '#808080',
  redText: '#FF0000',
  greenEye: '#2ADF26',
  grayEye: '#6B6F71',
  brownEyes: '#753F0E',
  yellowEyes: '#E8BB1C',
  darkGray: '#757575',
  modalColor: '#1B1B1B',
  suitColor: '#CDCDCD',
  borderDashedColor: '#3B3B3B',
  blueWhite: '#F5F5F5',
  datePickerColor: '#252525',
  error: '#df4759',
};

export const SIZES = {
  // global sizes
  small: RFValue(5),
  base: RFValue(8),
  medium: RFValue(10),
  large: RFValue(18),
  radius: RFValue(30),
  padding: RFValue(20),
  padding2: RFValue(12),

  // font sizes
  h8: 8,
  h9: 9,
  h9_5: 9.5,
  h10: 10,
  h11: 11,
  h12: 12,
  h13: 13,
  h14: 14,
  h15: 15,
  h16: 16,
  h17: 17,
  h18: 18,
  h19: 19,
  h20: 20,
  h21: 21,
  h22: 22,
  h23: 23,
  h24: 24,
  h25: 25,
  h26: 26,
  h27: 27,
  h28: 28,
  h30: 30,
  h32: 32,
  h33: 33,
  h38: 38,
  h40: 40,
  h45: 45,
  h48: 48,
  h50: 50,
  h52: 52,
  h55: 55,
  h60: 60,
  h65: 65,
  h70: 70,
  h80: 80,
  h150: 150,
  // app dimensions
  width,
  height,
};

export const FONTS = {
  Bold150: {
    fontFamily: 'Gilroy-Bold',
    fontSize: RFValue(SIZES.h150),
  },
  Bold48: {
    fontFamily: 'Gilroy-Bold',
    fontSize: RFValue(SIZES.h48),
  },
  Bold40: {
    fontFamily: 'Gilroy-Bold',
    fontSize: RFValue(SIZES.h40),
  },
  Bold35: {
    fontFamily: 'Gilroy-Bold',
    fontSize: RFValue(SIZES.h38),
  },
  Bold33: {
    fontFamily: 'Gilroy-Bold',
    fontSize: RFValue(SIZES.h33),
  },
  Bold30: {
    fontFamily: 'Gilroy-Bold',
    fontSize: RFValue(SIZES.h30),
  },
  Bold28: {
    fontFamily: 'Gilroy-Bold',
    fontSize: RFValue(SIZES.h28),
  },
  Bold26: {
    fontFamily: 'Gilroy-Bold',
    fontSize: RFValue(SIZES.h26),
  },
  Bold24: {
    fontFamily: 'Gilroy-Bold',
    fontSize: RFValue(SIZES.h24),
  },
  Bold23: {
    fontFamily: 'Gilroy-Bold',
    fontSize: RFValue(SIZES.h23),
  },
  Bold20: {
    fontFamily: 'Gilroy-Bold',
    fontSize: RFValue(SIZES.h20),
  },
  Bold17: {
    fontFamily: 'Roboto-Bold',
    fontSize: RFValue(SIZES.h17),
  },
  Bold16: {
    fontFamily: 'Gilroy-Bold',
    fontSize: RFValue(SIZES.h16),
  },
  Bold15: {
    fontFamily: 'Gilroy-Bold',
    fontSize: RFValue(SIZES.h15),
  },
  Bold14: {
    fontFamily: 'Gilroy-Bold',
    fontSize: RFValue(SIZES.h14),
  },
  Bold13: {
    fontFamily: 'Gilroy-Bold',
    fontSize: RFValue(SIZES.h13),
  },
  Bold12: {
    fontFamily: 'Gilroy-Bold',
    fontSize: RFValue(SIZES.h12),
  },
  Bold11: {
    fontFamily: 'Gilroy-Bold',
    fontSize: RFValue(SIZES.h11),
  },
  Bold9: {
    fontFamily: 'Gilroy-Bold',
    fontSize: RFValue(SIZES.h9),
  },
  Medium22: {
    fontFamily: 'Gilroy-Medium',
    fontSize: RFValue(SIZES.h22),
  },

  Medium20: {
    fontFamily: 'Gilroy-Medium',
    fontSize: RFValue(SIZES.h20),
  },
  Medium18: {
    fontFamily: 'Gilroy-Medium',
    fontSize: RFValue(SIZES.h18),
  },
  Medium16: {
    fontFamily: 'Gilroy-Medium',
    fontSize: RFValue(SIZES.h16),
  },
  Medium15: {
    fontFamily: 'Gilroy-Medium',
    fontSize: RFValue(SIZES.h15),
  },
  Medium14: {
    fontFamily: 'Gilroy-Medium',
    fontSize: RFValue(SIZES.h14),
  },
  Medium13: {
    fontFamily: 'Gilroy-Medium',
    fontSize: RFValue(SIZES.h13),
  },
  Medium12: {
    fontFamily: 'Gilroy-Medium',
    fontSize: RFValue(SIZES.h12),
  },
  Medium11: {
    fontFamily: 'Gilroy-Medium',
    fontSize: RFValue(SIZES.h11),
  },
  Medium10: {
    fontFamily: 'Gilroy-Medium',
    fontSize: RFValue(SIZES.h10),
  },
  Medium9_5: {
    fontFamily: 'Gilroy-Medium',
    fontSize: RFValue(SIZES.h9_5),
  },
  Medium9: {
    fontFamily: 'Gilroy-Medium',
    fontSize: RFValue(SIZES.h9),
  },
  Medium8: {
    fontFamily: 'Gilroy-Medium',
    fontSize: RFValue(SIZES.h8),
  },
  Regular22: {
    fontFamily: 'Gilroy-Regular',
    fontSize: RFValue(SIZES.h22),
  },
  Regular20: {
    fontFamily: 'Gilroy-Regular',
    fontSize: RFValue(SIZES.h20),
  },
  Regular18: {
    fontFamily: 'Gilroy-Regular',
    fontSize: RFValue(SIZES.h18),
  },
  Regular17: {
    fontFamily: 'Gilroy-Regular',
    fontSize: RFValue(SIZES.h17),
  },
  Regular16: {
    fontFamily: 'Gilroy-Regular',
    fontSize: RFValue(SIZES.h16),
  },
  Regular15: {
    fontFamily: 'Gilroy-Regular',
    fontSize: RFValue(SIZES.h15),
  },
  Regular14: {
    fontFamily: 'Gilroy-Regular',
    fontSize: RFValue(SIZES.h14),
  },
  Regular13: {
    fontFamily: 'Gilroy-Regular',
    fontSize: RFValue(SIZES.h13),
  },
  Regular12: {
    fontFamily: 'Gilroy-Regular',
    fontSize: RFValue(SIZES.h12),
  },
  Regular11: {
    fontFamily: 'Gilroy-Regular',
    fontSize: RFValue(SIZES.h11),
  },
  Regular10: {
    fontFamily: 'Gilroy-Regular',
    fontSize: RFValue(SIZES.h10),
  },
  Regular9_5: {
    fontFamily: 'Gilroy-Regular',
    fontSize: RFValue(SIZES.h9_5),
  },
  Regular8: {
    fontFamily: 'Gilroy-Regular',
    fontSize: RFValue(SIZES.h8),
  },
  light40: {
    fontFamily: 'Gilroy-Light',
    fontSize: RFValue(SIZES.h40),
  },
  light13: {
    fontFamily: 'Gilroy-Light',
    fontSize: RFValue(SIZES.h13),
  },
  light12: {
    fontFamily: 'Gilroy-Light',
    fontSize: RFValue(SIZES.h12),
  },
  light11: {
    fontFamily: 'Gilroy-Light',
    fontSize: RFValue(SIZES.h11),
  },
  light10: {
    fontFamily: 'Gilroy-Light',
    fontSize: RFValue(SIZES.h10),
  },
};

const appTheme = { FONTS, SIZES, COLORS };

export default appTheme;
