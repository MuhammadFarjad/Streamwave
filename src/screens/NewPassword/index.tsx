import React, { useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {
  Header,
  Button,
  FormInput,
  Container,
  //   Title,
  //   showToast,
  Loader,
} from '../../components';
import { SIZES, images } from '../../constant';
import { Formik } from 'formik';
import styles from './styles';
import { useRoute } from '@react-navigation/native';
import { useAuthDispatch, useAuthState } from '../../redux/Hook/authHooks';
import { navigate } from '../../navigation/Stack/NavigationRef';
import NavigationStrings from '../../navigation/NavigationStrings';
import { RootStackParamList } from '../../navigation/types/RootStackParamList';

const NewPassword: React.FC = () => {
  const route = useRoute();
  const { resetPassword, clearAuthError } = useAuthDispatch();
  const { resetPasswordSuccess, loading, error } = useAuthState();
  const { token } = (route?.params as { token: string }) || {};

  const width = SIZES.width * 0.9;
  const height = SIZES.height * 0.06;

  const handleSubmit = async (values: {
    newPassword: string;
    confirmPassword: string;
  }) => {
    // try {
    //     clearAuthError();
    //     await resetPassword({
    //         token: token,
    //         password: values.newPassword,
    //         confirm_password: values.confirmPassword
    //     });
    // } catch (err) {
    //     console.log('Validation error:', err);
    // }
  };

  useEffect(() => {
    if (resetPasswordSuccess && !loading && !error) {
      //   showToast({
      //     type: 'success',
      //     text1: 'Password Reset Successful',
      //     text2: 'Your password has been updated successfully',
      //   });
      //   navigate({
      //     name: NavigationStrings.SIGN_IN as keyof RootStackParamList,
      //   });
    } else if (error) {
      //   showToast({
      //     type: 'error',
      //     text1: 'Password Reset Failed',
      //     text2: error || 'Failed to reset password. Please try again.',
      //   });
      clearAuthError();
    }
  }, [resetPasswordSuccess, loading, error]);

  return (
    <Container scroll={true} style={styles.container}>
      <Header background title="New Password" />
      <Formik
        initialValues={{ newPassword: '', confirmPassword: '' }}
        onSubmit={handleSubmit}
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
          <>
            <View style={styles.passwordInputContainer}>
              <View>
                <Text style={styles.text}>New Password</Text>
                <FormInput
                  label="New Password"
                  placeholder="New Password"
                  value={values.newPassword}
                  onChangeText={handleChange('newPassword')}
                  onBlur={handleBlur('newPassword')}
                  isPassword={true}
                  width={width}
                  trip
                />
              </View>
              <View>
                <Text style={styles.text}>Confirm Password</Text>
                <FormInput
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  isPassword={true}
                  width={width}
                  trip
                />
              </View>
            </View>
            {/* <View style={styles.requirementList}>
                                        <Text style={styles.requirementText}>
                                            <Text style={styles.bulletPoint}>• </Text>
                                            <Text style={values.newPassword.length >= 12 ? styles.requirementMet : styles.requirement}>
                                                At least 12 characters long, but 14 or more is better
                                                {values.newPassword.length >= 12 && ' ✓'}
                                            </Text>
                                        </Text>

                                        <Text style={styles.requirementText}>
                                            <Text style={styles.bulletPoint}>• </Text>
                                            <Text style={
                                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(values.newPassword)
                                                    ? styles.requirementMet
                                                    : styles.requirement
                                            }>
                                                A combination of uppercase, lowercase, numbers, and symbols
                                                {/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(values.newPassword) && ' ✓'}
                                            </Text>
                                        </Text>
                                    </View> */}
            <View style={styles.buttonContainer}>
              <Button onPress={() => handleSubmit()} title="Save" />
            </View>
          </>
        )}
      </Formik>
      {loading && <Loader />}
    </Container>
  );
};

export default NewPassword;
