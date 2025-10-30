import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  Header,
  Button,
  Container,
  //   showToast,
  Loader,
  //   Title,
} from '../../components';
import { goBack, navigate } from '../../navigation/Stack/NavigationRef';
import NavigationStrings from '../../navigation/NavigationStrings';
import { RootStackParamList } from '../../navigation/types/RootStackParamList';
import { COLORS, SIZES, images } from '../../constant';
import { Formik } from 'formik';
import styles from './styles';
import { useRoute } from '@react-navigation/native';
import { useAuthDispatch, useAuthState } from '../../redux/Hook/authHooks';

const Otp: React.FC = () => {
  const route = useRoute();
  const {
    email,
    code: initialCode = '',
    addMember,
  } = (route?.params as {
    email?: string;
    code?: string;
    addMember?: boolean;
  }) || {};
  const { validatePasswordCode, forgotPassword, clearAuthError } =
    useAuthDispatch();
  const { loading, error, validateCodeSuccess, validatePasswordToken } =
    useAuthState();
  const [submittedOtp, setSubmittedOtp] = useState('');
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const otpRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];
  const width = SIZES.width * 0.9;

  const handleContinue = async (values: { otp: string }) => {
    // if (addMember) {
    //     // navigate({name: NavigationStrings.CONGRATS_PAGE as keyof RootStackParamList,})
    //     Alert.alert('Success')
    // } else {
    //     if (values.otp.length !== 6 || !email) return;
    //     try {
    //         clearAuthError();
    //         setSubmittedOtp(values.otp);
    //         await validatePasswordCode({
    //             email: email,
    //             otp: values.otp
    //         });
    //     } catch (err) {
    //         console.log('Validation error:', err);
    //     }
    // }
    navigate({
      name: NavigationStrings.CHANGE_PASSWORD as keyof RootStackParamList,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer <= 1) {
          clearInterval(interval);
          setCanResend(true);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (validateCodeSuccess && !loading && !error) {
      // showToast({
      //   type: 'success',
      //   text1: 'OTP Verified',
      //   text2: 'Your verification code has been successfully validated',
      // });
      // navigate({
      //   name: NavigationStrings.NEW_PASSWORD as keyof RootStackParamList,
      //   params: { token: validatePasswordToken },
      // });
    } else if (error) {
      // showToast({
      //     type: 'error',
      //     text1: 'Verification Failed',
      //     text2: error || 'The OTP you entered is invalid or expired',
      // });
    }
  }, [validateCodeSuccess, loading, error]);

  const handleResendOtp = async () => {
    if (!email) return;
    await forgotPassword(email);
  };

  return (
    <Container scroll={true} style={styles.container}>
      <Container style={styles.containerCont}>
        <Header background title="OTP_Verification" />
        <Formik initialValues={{ otp: '' }} onSubmit={handleContinue}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
            dirty,
            setFieldValue,
          }) => {
            const handleDigitChange = async (text: string, index: number) => {
              const newOtp = values.otp.split('');
              newOtp[index] = text.replace(/[^0-9]/g, '');
              const joinedOtp = newOtp.join('');
              setFieldValue('otp', joinedOtp);

              if (text.length === 1 && index < 5) {
                otpRefs[index + 1].current?.focus();
              }

              if (text.length === 0 && index > 0) {
                otpRefs[index - 1].current?.focus();
              }
              if (joinedOtp.length === 6 && email) {
                await validatePasswordCode({
                  email: email,
                  otp: joinedOtp,
                });
                setSubmittedOtp(joinedOtp);
              }
            };

            return (
              <>
                <View style={styles.inputContainer}>
                  {[0, 1, 2, 3, 4, 5].map(index => (
                    <TextInput
                      key={index}
                      style={[
                        styles.otpInput,
                        values.otp[index] && styles.filledOtpInput,
                        addMember && {
                          backgroundColor: COLORS.modalColor,
                          borderColor: COLORS.ThemeColor,
                        },
                      ]}
                      value={values.otp[index] || ''}
                      onChangeText={text => handleDigitChange(text, index)}
                      onBlur={handleBlur('otp')}
                      keyboardType="numeric"
                      maxLength={1}
                      textAlign="center"
                      ref={otpRefs[index]}
                      placeholderTextColor={COLORS.darkGray}
                    />
                  ))}
                </View>

                <View style={styles.buttonContainer}>
                  <Button onPress={() => handleSubmit()} title="Verify" />
                </View>

                <View style={styles.resendContainer}>
                  <Text
                    style={[
                      styles.resendText,
                      addMember && { color: COLORS.white },
                    ]}
                  >
                    Didn't receive code?
                  </Text>
                  {canResend ? (
                    <TouchableOpacity onPress={handleResendOtp}>
                      <Text style={styles.resendLink}>Resend Again</Text>
                    </TouchableOpacity>
                  ) : (
                    <Text
                      style={[
                        [
                          styles.resendText,
                          addMember && { color: COLORS.white },
                        ],
                        { marginLeft: 5 },
                      ]}
                    >
                      ({timer}s)
                    </Text>
                  )}
                </View>
              </>
            );
          }}
        </Formik>
      </Container>
      {loading && <Loader />}
    </Container>
  );
};

export default Otp;
