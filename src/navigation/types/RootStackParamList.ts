export type RootStackParamList = {
    SIGN_IN: undefined;
    SIGN_UP: { someParam: string };
    MY_CLOSET: undefined;
};

export type NavigateParams = {
    name: keyof RootStackParamList;
    params?: any;
};