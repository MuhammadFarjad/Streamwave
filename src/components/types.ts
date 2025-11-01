import React, { ReactNode } from 'react';
import {
  ViewStyle,
  LayoutChangeEvent,
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ImageSourcePropType,
} from 'react-native';

export interface GradientButtonProps extends TouchableOpacityProps {
  title: string;
  colors?: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  locations?: number[];
  gradientStyle?: ViewStyle;
  textStyle?: TextStyle;
  disabledColors?: string[];
  camera?: any;
  gallery?: boolean;
  cancel?: boolean;
}

export interface HeaderProps {
  title?: string;
  tintColor?: string;
  background?: boolean;
  skip?: boolean;
  share?: boolean;
  showDownload?: boolean;
  onSkipPress?: () => void;
}

export interface FormInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  isPassword?: boolean;
  width: any;
  backgroundColor?: string;
  phoneNumber?: boolean;
  isDarkMode?: boolean;
  settingEmail?: boolean;
  onBlur?: (e: any) => void;
  error?: string | false;
  borderColor?: boolean;
  trip?: boolean;
  editable?: boolean;
  rightIcon?: any;
  onRightIconPress?: () => void;
}

export interface ContainerProps {
  children: ReactNode;
  scroll?: boolean;
  style?: StyleProp<ViewStyle>;
  isPadding?: boolean;
  onLayout?: (event: LayoutChangeEvent) => void;
  needsKeyboardAvoiding?: boolean;
}

export interface LogoContainerProps {
  back?: boolean;
}

export interface PhoneNumberInputProps {
  values: {
    phone_number: string;
    [key: string]: any;
  };
  setFieldValue: (field: string, value: string) => void;
  width?: Number;
  height?: Number;
  background?: String;
  isDarkMode?: boolean;
  settingEmail?: boolean;
  error?: string | false;
  touched?: any;
  handleBlur?: (field: string) => void;
}

export interface TitleProps {
  header: string;
  description: string;
}

export interface SearchBarProps {
  // searchQuery: string;
  // setSearchQuery: (text: string) => void;
  placeholder?: string;
  // placeholderTextColor?: string;
  showFilter?: boolean;
  onFilterPress?: () => void;
  // searchIconSource: ImageSourcePropType;
  // filterIconSource: ImageSourcePropType;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

export interface albumCardardProps {
  image: any;
  title: any;
  artist: string;
  width?: number | string;
  height?: number | string;
}
