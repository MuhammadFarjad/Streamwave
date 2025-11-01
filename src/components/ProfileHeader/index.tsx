import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, images } from '../../constant';
import { HeaderProps } from '../types';
import { goBack } from '../../navigation/Stack/NavigationRef';
import styles from './styles';
import NavigationStrings from '../../navigation/NavigationStrings';
import { navigate } from '../../navigation/Stack/NavigationRef';
import { RootStackParamList } from '../../navigation/types/RootStackParamList';

const ProfileHeader: React.FC<HeaderProps> = ({
  title,
  tintColor,
  background = false,
  skip = false,
  share = false,
  showDownload = false,
  onSkipPress,
}) => {
  const onBackPress = () => {
    goBack();
  };

  const handleProfileClick = () => {
    // navigate({
    //     name: NavigationStrings.PROFILE as keyof RootStackParamList,
    //     params: { screen: NavigationStrings.PROFILE },
    // })
  };

  return (
    <View style={styles.profileCont}>
      <TouchableOpacity onPress={handleProfileClick} style={styles.Cont}>
        <View style={styles.boxCont}>
          <Image source={images.boxes} style={styles.box} />
        </View>
        <Image source={images.profile} style={styles.image} />
        <View style={styles.textCont}>
          <Text style={styles.text}>Good Morning 👋</Text>
          <Text style={styles.text2}>Trish William</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.iconsCont}>
        <View style={styles.iconCont}>
          <Image source={images.search} style={styles.image2} />
        </View>
        <View style={styles.iconCont}>
          <Image source={images.notification} style={styles.image2} />
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;
