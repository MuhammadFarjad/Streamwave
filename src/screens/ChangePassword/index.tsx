import { View, Alert, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './style';
import { Header, Button, FormInput } from '../../components';
import { SIZES } from '../../constant';
import { useAuthState, useAuthDispatch } from '../../redux/Hook/authHooks';
import { navigate } from '../../navigation/Stack/NavigationRef';
import NavigationStrings from '../../navigation/NavigationStrings';
import localStoreUtil from '../../utils/localStoreUtil';
import { RootStackParamList } from '../../navigation/types/RootStackParamList';

const ChangePassword = () => {
  const { changePassword, clearAuthError } = useAuthDispatch();
  const { loading, error, resetPasswordSuccess } = useAuthState();
  const [formValues, setFormValues] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const width = SIZES.width * 0.9;

  const handleChange = (field: keyof typeof formValues) => (text: string) => {
    setFormValues(prev => ({ ...prev, [field]: text }));
  };

  const handleUpdate = async (values: typeof formValues) => {
    clearAuthError();

    await localStoreUtil.storeData('userCredentials', {
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
      confirmPassword: values.confirmPassword,
    });
    await changePassword({
      old_password: values.oldPassword,
      new_password: values.newPassword,
      confirm_new_password: values.confirmPassword,
    });
  };
  useEffect(() => {
    if (resetPasswordSuccess && !loading && !error) {
      // showToast({
      //   type: 'error',
      //   text1: 'Password reset Successful',
      //   text2: 'You have successfully Changed the password !',
      // });
      // navigate({
      //   name: NavigationStrings.HOME as keyof RootStackParamList,
      //   params: { screen: NavigationStrings.HOME },
      // });
    } else if (error) {
      // showToast({
      //   type: 'error',
      //   text1: 'Password reset Failed',
      //   text2: error || 'Invalid credentials',
      // });
    }
  }, [resetPasswordSuccess, loading, error]);
  return (
    <View style={styles.mainParent}>
      <Header title="Change Password" background />

      <View style={styles.parent}>
        <View style={styles.inputParent}>
          <Text style={styles.inputText}>Current Password</Text>
          <FormInput
            label="Old Password"
            value={formValues.oldPassword}
            width={width}
            onChangeText={handleChange('oldPassword')}
            placeholder="Enter Old Password"
            isPassword={true}
            trip
          />
        </View>
        <View style={styles.inputParent}>
          <Text style={styles.inputText}>New Password</Text>
          <FormInput
            label="New Password"
            value={formValues.newPassword}
            width={width}
            onChangeText={handleChange('newPassword')}
            placeholder="Enter New Password"
            isPassword={true}
            trip
          />
        </View>
        <View style={styles.inputParent}>
          <Text style={styles.inputText}>Confirm Password</Text>
          <FormInput
            label="Confirm Password"
            value={formValues.confirmPassword}
            width={width}
            onChangeText={handleChange('confirmPassword')}
            placeholder="Confirm New Password"
            isPassword={true}
            trip
          />
        </View>

        <Button
          onPress={() => handleUpdate(formValues)}
          style={styles.updateButton}
          title="Update"
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      </View>
    </View>
  );
};

export default ChangePassword;
