import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Store';
import { editProfile, clearUserError, setUserProfile, getProfile } from '../Slices/userSlice';

export const useUserDispatch = () => {
    const dispatch = useDispatch<AppDispatch>();

    return {
        editProfile: (profileData: any) => dispatch(editProfile(profileData)),
        clearUserError: () => dispatch(clearUserError()),
        setUserProfile: (profile: any) => dispatch(setUserProfile(profile)),
        getProfile: (profile: any) => dispatch(getProfile(profile)),
    };
};

export const useUserState = () => {
    return useSelector((state: RootState) => ({
        profile: state.user.profile,
        loading: state.user.loading,
        error: state.user.error,
        isProfileUpdated: state.user.isProfileUpdated,
        isProfileFetched: state.user.isProfileFetched,
    }));
};