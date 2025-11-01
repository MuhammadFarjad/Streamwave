import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import {
  Container,
  Header,
  FormInput,
  Button,
  Loader,
  LogoContainer,
  Title,
  //   SocialsContainer,
  //   Title,
} from '../../components';
import styles from './styles';
import { COLORS, images, SIZES } from '../../constant';
import { SocialPlatform } from '../types';
import { Formik } from 'formik';
import CheckBox from '@react-native-community/checkbox';
import { navigate } from '../../navigation/Stack/NavigationRef';
import NavigationStrings from '../../navigation/NavigationStrings';
import { RootStackParamList } from '../../navigation/types/RootStackParamList';
import { useAuthState, useAuthDispatch } from '../../redux/Hook/authHooks';
import { loginValidationSchema } from '../../utils/validations/auth.validations';
import localStoreUtil from '../../utils/localStoreUtil';

const SignIn = () => {
  const [activeButton, setActiveButton] = useState<SocialPlatform | null>(null);
  const socials: SocialPlatform[] = ['google', 'apple', 'facebook'];
  const [rememberMe, setRememberMe] = React.useState(false);
  const { login, clearAuthError } = useAuthDispatch();
  const { loading, error, isAuthenticated } = useAuthState();
  const [initialValues, setInitialValues] = useState({
    email: '',
    password: '',
    device_id: '1234',
    token: '1234',
  });
  const [formKey, setFormKey] = useState(0);

  const width = SIZES.width * 0.9;

  useEffect(() => {
    const initializeDeviceData = async () => {
      try {
        const deviceId = 'default_device_id';
        const token = 'default_token';

        const savedCredentials = await localStoreUtil.getData<{
          email: string;
          password: string;
          rememberMe: boolean;
        }>('userCredentials');

        setInitialValues({
          email: savedCredentials?.email || '',
          password: savedCredentials?.password || '',
          device_id: deviceId,
          token: token,
        });

        setRememberMe(savedCredentials?.rememberMe || false);
        setFormKey(prev => prev + 1);
      } catch (err) {
        console.error('Error initializing device data:', err);
        setInitialValues({
          email: '',
          password: '',
          device_id: 'default_device_id',
          token: 'default_token',
        });
      }
    };

    initializeDeviceData();
  }, []);

  const handleRememberMeToggle = async (newValue: boolean) => {
    setRememberMe(newValue);

    if (!newValue) {
      await localStoreUtil.removeData('userCredentials');
    } else if (initialValues.email && initialValues.password) {
      await localStoreUtil.storeData('userCredentials', {
        email: initialValues.email,
        password: initialValues.password,
        rememberMe: newValue,
      });
    }
  };

  useEffect(() => {
    if (isAuthenticated && !loading && !error) {
      //   showToast({
      //     type: 'success',
      //     text1: 'Login Successful',
      //     text2: 'You have successfully logged in!',
      //   });
      // navigate({
      //     name: NavigationStrings.MUSIC_STACK as keyof RootStackParamList,
      //     params: { screen: NavigationStrings.HOME },
      // });
    } else if (error) {
      // showToast({
      //     type: 'error',
      //     text1: 'Login Failed',
      //     text2: error || 'Invalid credentials',
      // });
    }
  }, [isAuthenticated, loading, error]);

  const toggleButton = (buttonName: SocialPlatform) => {
    setActiveButton(buttonName === activeButton ? null : buttonName);
  };

  const handleSocialLogin = (platform: SocialPlatform) => {
    toggleButton(platform);
  };

  const handleForgotPassword = () => {
    navigate({
      name: NavigationStrings.FORGOT_PASSWORD as keyof RootStackParamList,
    });
  };

  const handleSignIn = () => { };

  // const handleLogin = async (values: typeof initialValues) => {
  //     clearAuthError();

  //     if (rememberMe) {
  //         await localStoreUtil.storeData('userCredentials', {
  //             email: values.email,
  //             password: values.password,
  //             rememberMe: true
  //         });
  //     } else {
  //         await localStoreUtil.removeData('userCredentials');
  //     }

  //     await login(values);
  // };
  const handleLogin = () => {
    // navigate({
    //     name: NavigationStrings.BOTTOM_STACK as keyof RootStackParamList,
    //     params: { screen: NavigationStrings.HOME },
    // });
    // navigate({
    //     name: NavigationStrings.MUSIC_STACK as keyof RootStackParamList,
    //     params: { screen: NavigationStrings.PREFERENCE },
    // });
  };

  const handlePressSignUp = () => {
    navigate({ name: NavigationStrings.SIGN_UP as keyof RootStackParamList });
  };

  return (
    <ImageBackground source={images.background1} style={styles.backgroundImage}>
      <Container style={styles.container} needsKeyboardAvoiding={true}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <LogoContainer />
          <View style={styles.titleCont}>
            <Title header="Hello there," description="Welcome back" />
          </View>

          <Container style={styles.subContainer}>
            <Formik
              key={formKey}
              initialValues={initialValues}
              validationSchema={loginValidationSchema}
              onSubmit={handleLogin}
              enableReinitialize
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                isValid,
                dirty,
              }) => (
                <View>
                  <View style={styles.inputContainer}>
                    <FormInput
                      label="Email"
                      placeholder="Email Address"
                      value={values.email}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      // error={touched.email && errors.email}
                      width={width}
                      trip
                    />
                    <FormInput
                      label="Password"
                      placeholder="Password"
                      value={values.password}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      // error={touched.password && errors.password}
                      isPassword={true}
                      width={width}
                      trip
                    />
                  </View>
                  <View style={styles.rememberMeContainer}>
                    <View style={styles.rememberMeCheckBoxContainer}>
                      {/* <CheckBox
                                            value={rememberMe}
                                            onValueChange={handleRememberMeToggle}
                                            boxType="square"
                                            onCheckColor={COLORS.ThemeColor}
                                            onTintColor={COLORS.ThemeColor}
                                            style={styles.checkbox}
                                        />
                                        <Text style={styles.rememberMeText}>Remember Me</Text> */}
                    </View>
                    <TouchableOpacity onPress={handleForgotPassword}>
                      <Text style={styles.forgotPasswordText}>
                        Forgot Password?
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Button onPress={() => handleSignIn()} title="Login" />
                  <View style={styles.linecontainer}>
                    <View style={styles.line} />
                    <Text style={styles.linetext}>Or Continue with</Text>
                    <View style={styles.line} />
                  </View>
                  <View style={styles.socialContainer}>
                    {socials.map(social => (
                      <TouchableOpacity
                        key={social}
                        style={[
                          styles.socialButton,
                          activeButton === social && styles.activeButton,
                        ]}
                        onPress={() => handleSocialLogin(social)}
                      >
                        <View style={styles.buttonContent}>
                          <Image
                            source={images[social]}
                            style={[styles.icon]}
                          />
                          {activeButton === social && (
                            <Text style={styles.buttonText}>
                              With{' '}
                              {social.charAt(0).toUpperCase() + social.slice(1)}
                            </Text>
                          )}
                        </View>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              )}
            </Formik>
            <Text style={styles.user2}>
              Not a member?{' '}
              <Text
                style={{ color: COLORS.primary }}
                onPress={handlePressSignUp}
              >
                Sign up now
              </Text>
            </Text>
          </Container>
        </KeyboardAvoidingView>
        {loading && <Loader />}
      </Container>
    </ImageBackground>
  );
};

export default SignIn;
