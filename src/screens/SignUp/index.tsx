import React, { useEffect, useCallback } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import { SignInProps } from '../types';
import {
  FormInput,
  Container,
  Button,
  PhoneNumberInput,
  Header,
  Loader,
  //   SocialsContainer,
  //   Title,
} from '../../components';
import { COLORS, images, SIZES } from '../../constant';
import styles from './styles';
import { Formik } from 'formik';
import NavigationStrings from '../../navigation/NavigationStrings';
import { navigate } from '../../navigation/Stack/NavigationRef';
import { RootStackParamList } from '../../navigation/types/RootStackParamList';
import CheckBox from '@react-native-community/checkbox';
import { signUpValidationSchema } from '../../utils/validations/auth.validations';
import { useAuthDispatch, useAuthState } from '../../redux/Hook/authHooks';

const SignUp: React.FC<SignInProps> = ({ route }) => {
  const width = SIZES.width * 0.9;
  const height = SIZES.height * 0.06;

  const [rememberMe, setRememberMe] = React.useState(false);
  const { register } = useAuthDispatch();
  const { loading, error, isAuthenticated } = useAuthState();

  useEffect(() => {
    if (isAuthenticated && !loading && !error) {
      //   showToast({
      //     type: 'success',
      //     text1: 'Registration Successful',
      //     text2: 'Your account has been created successfully!',
      //   });
      // navigate({
      //     name: NavigationStrings. as keyof RootStackParamList,
      //     params: { screen: NavigationStrings. },
      // });
    } else if (error) {
      // showToast({
      //     type: 'error',
      //     text1: 'Registration Failed',
      //     text2: error || 'Something went wrong. Please try again.',
      // });
    }
  }, [isAuthenticated, loading, error]);

  const handleRegister = async (values: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    confirm_password: string;
    phone_number: string;
    device_id?: string;
    token?: string;
  }) => {
    if (!rememberMe) {
      // showToast({
      //     type: 'error',
      //     text1: 'Terms Required',
      //     text2: 'You must agree to the terms and conditions',
      // });
      return;
    }

    try {
      const userData = {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        password: values.password,
        phone_number: values.phone_number,
        confirm_password: values.confirm_password,
        device_id: '1234',
        token: '1234',
      };
      await register(userData);
    } catch (err) {
      console.error('Registration error:', err);
    }
  };

  // const handleSignIn = () => {
  //   navigate({
  //     name: NavigationStrings.HOME_STACK as keyof RootStackParamList,
  //     params: { screen: NavigationStrings.PREFERENCE },
  //   });
  // };

  const handleContinue = () => {};

  const handleLogin = () => {
    navigate({ name: NavigationStrings.SIGN_IN as keyof RootStackParamList });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBlue }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View>
            <Header title="Create an Account" background />
            <View>
              <Formik
                initialValues={{
                  first_name: '',
                  last_name: '',
                  email: '',
                  password: '',
                  confirm_password: '',
                  phone_number: '',
                  is_verified: false,
                  is_active: true,
                  points: 0,
                }}
                onSubmit={handleRegister}
                validationSchema={signUpValidationSchema}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  setFieldValue,
                  errors,
                  touched,
                  isValid,
                  dirty,
                }) => (
                  <View>
                    <View style={styles.inputContainer}>
                      {/* <View style={styles.rowContainer}>
                        <View>
                          <FormInput
                            label="First name"
                            placeholder="First name"
                            value={values.first_name}
                            onChangeText={handleChange('first_name')}
                            onBlur={handleBlur('first_name')}
                            width={SIZES.width * 0.5}
                            // error={touched.first_name && errors.first_name}
                          />
                        </View>
                        <View>
                          <FormInput
                            label="Last name"
                            placeholder="Last name"
                            value={values.last_name}
                            onBlur={handleBlur('last_name')}
                            onChangeText={handleChange('last_name')}
                            width={SIZES.width * 0.5}
                            // error={touched.last_name && errors.last_name}
                          />
                        </View>
                      </View> */}
                      <View>
                        <Text style={styles.inputText}>What's your email?</Text>
                        <FormInput
                          label="Email"
                          placeholder="Email Address"
                          onBlur={handleBlur('email')}
                          value={values.email}
                          onChangeText={handleChange('email')}
                          width={width}
                          // error={touched.email && errors.email}
                          trip
                        />
                      </View>
                      <View>
                        <Text style={styles.inputText}>
                          What's your number?
                        </Text>
                        <PhoneNumberInput
                          values={values}
                          setFieldValue={setFieldValue}
                          // error={touched.phoneNumber && errors.phoneNumber}
                        />
                        {touched.phone_number && errors.phone_number && (
                          <Text style={styles.errorText}>
                            {errors.phone_number}
                          </Text>
                        )}
                      </View>
                      <View>
                        <Text style={styles.inputText}>Password</Text>
                        <FormInput
                          label="Password"
                          placeholder="Password"
                          value={values.password}
                          onBlur={handleBlur('password')}
                          onChangeText={handleChange('password')}
                          isPassword={true}
                          width={width}
                          // error={touched.password && errors.password}
                          trip
                        />
                      </View>
                      <View>
                        <Text style={styles.inputText}>Confirm Password</Text>
                        <FormInput
                          label="Confirm Password"
                          placeholder="Confirm Password"
                          value={values.confirm_password}
                          onChangeText={handleChange('confirm_password')}
                          onBlur={handleBlur('confirm_password')}
                          isPassword={true}
                          width={width}
                          // error={touched.confirm_password && errors.confirm_password}
                          trip
                        />
                      </View>
                      <Text style={styles.termsText}>
                        By registering you agree to{' '}
                        <Text style={{ color: COLORS.primary }}>
                          terms conditions{' '}
                        </Text>
                        and{' '}
                        <Text style={{ color: COLORS.primary }}>
                          Privacy policy
                        </Text>
                      </Text>
                      <View style={styles.buttonCont}>
                        <Button onPress={handleContinue} title="Continue" />
                      </View>
                    </View>

                    <View style={styles.checkboxContainer}>
                      {/* <CheckBox
                                                value={rememberMe}
                                                onValueChange={setRememberMe}
                                                boxType="square"
                                                style={styles.checkbox}
                                                onCheckColor={COLORS.ThemeColor}
                                                onTintColor={COLORS.ThemeColor}
                                            /> */}
                    </View>
                    {/* {!rememberMe && (
                                            <Text style={styles.errorText}>You must agree to the terms and conditions</Text>
                                        )} */}
                  </View>
                )}
              </Formik>
              <View style={styles.socialCont}></View>
              <View style={styles.signupContainer}>
                <Text style={styles.member}>Already have an account? </Text>
                <Text style={styles.signupLink} onPress={handleLogin}>
                  Login
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      {/* {loading && <Loader />} */}
    </SafeAreaView>
  );
};

export default SignUp;
