import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  ScrollView,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import { Container, Header, ProfileHeader, SearchBar } from '../../components';
import { navigate } from '../../navigation/Stack/NavigationRef';
import { RootStackParamList } from '../../navigation/types/RootStackParamList';
import NavigationStrings from '../../navigation/NavigationStrings';
import styles from './styles';
import { COLORS, SIZES, images } from '../../constant';
// import { songCardConfig } from '../../config/index';

const Radio: React.FC = () => {

  return (
    <Header title='Radio' />
  );
};

export default Radio;
