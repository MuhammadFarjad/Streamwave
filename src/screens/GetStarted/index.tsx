import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { FormInput, Container, Button, LogoContainer } from '../../components';
import { navigate } from '../../navigation/Stack/NavigationRef';
import { RootStackParamList } from '../../navigation/types/RootStackParamList';
import NavigationStrings from '../../navigation/NavigationStrings';
import styles from './styles';
import { SIZES, images } from '../../constant';

const GetStarted: React.FC = () => {
  const handleSignUp = () => {
    navigate({
      name: NavigationStrings.SIGN_UP as keyof RootStackParamList,
    });
  };

  return (
    <ImageBackground source={images.background2} style={styles.backgroundImage}>
      <Container style={styles.Container}>
        <LogoContainer />
        <Text style={styles.text1}>
          Every note{'\n'} every mood, just{'\n'} a tap away
        </Text>
        <Text style={styles.text2}>
          Discover, stream, and vibe to your favorite{'\n'} music all in one app
        </Text>
        <View style={styles.btnCont}>
          <Button title="Signup Free" onPress={handleSignUp} />
          <View style={styles.button}>
            <Image source={images.google} style={styles.icon} />
            <Text style={styles.buttonText}>Continue with Google</Text>{' '}
          </View>
          <View style={styles.button}>
            <Image source={images.facebook} style={styles.icon} />
            <Text style={styles.buttonText}>Continue with Facebook</Text>{' '}
          </View>
          <View style={styles.button}>
            <Image source={images.apple} style={styles.icon} />
            <Text style={styles.buttonText}>Continue with Apple</Text>{' '}
          </View>
        </View>
        <Text style={styles.text2}>Continue with email</Text>
      </Container>
    </ImageBackground>
  );
};

export default GetStarted;
