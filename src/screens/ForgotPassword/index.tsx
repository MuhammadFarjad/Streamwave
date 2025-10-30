import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {
  FormInput,
  Container,
  Button,
  //   Title,
  //   showToast,
  Loader,
  Header,
} from '../../components';
import { navigate } from '../../navigation/Stack/NavigationRef';
import { RootStackParamList } from '../../navigation/types/RootStackParamList';
import NavigationStrings from '../../navigation/NavigationStrings';
import { Formik } from 'formik';
import styles from './styles';
import { SIZES, images } from '../../constant';
import { useAuthDispatch, useAuthState } from '../../redux/Hook/authHooks';
import { emailValidationSchema } from '../../utils/validations/auth.validations';

const ForgotPassword: React.FC = () => {
  const width = SIZES.width * 0.9;
  const height = SIZES.height * 0.06;
  const { forgotPassword } = useAuthDispatch();
  const { loading, error, forgotPasswordSuccess } = useAuthState();
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    if (forgotPasswordSuccess && !loading && !error) {
      // showToast({
      //     type: 'success',
      //     text1: 'Reset Link Sent',
      //     text2: 'Please check your email for password reset instructions',
      // });
      // navigate({
      //     name: NavigationStrings.OTP as keyof RootStackParamList,
      //     params: { email: email }
      // });
    } else if (error) {
      // showToast({
      //     type: 'error',
      //     text1: 'Password Reset Failed',
      //     text2: error || 'Failed to send reset instructions',
      // });
    }
  }, [forgotPasswordSuccess, loading, error]);

  // const handleContinue = async (values: { email: string }) => {
  //   // try {
  //   //     setEmail(values.email);
  //   //     await forgotPassword(values.email);
  //   // } catch (err) {
  //   //     console.error('Forgot password error:', err);
  //   // }
  //   navigate({
  //     name: NavigationStrings.OTP as keyof RootStackParamList,
  //     params: { email: email },
  //   });
  // };

  const handleContinue = () => {
    navigate({
      name: NavigationStrings.OTP as keyof RootStackParamList,
      params: { email: email },
    });
  };

  return (
    <Container scroll={true} style={styles.containerCont}>
      <Container style={styles.container}>
        <Header background title="Change Password" />
        <View style={styles.content}>
          <Formik
            initialValues={{ email: '' }}
            onSubmit={handleContinue}
            validationSchema={emailValidationSchema}
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
              <>
                <View style={styles.phoneInputContainer}>
                  <FormInput
                    label="Email"
                    placeholder="Your Email"
                    onBlur={handleBlur('email')}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    width={width}
                    // error={touched.email && errors.email}
                    trip
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <Button onPress={() => handleContinue()} title="Continue" />
                </View>
              </>
            )}
          </Formik>
        </View>
      </Container>
      {/* {loading && <Loader />} */}
    </Container>
  );
};

export default ForgotPassword;
