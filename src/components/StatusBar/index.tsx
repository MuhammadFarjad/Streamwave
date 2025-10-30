import React from 'react';
import { StatusBar, View, StatusBarStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type CustomStatusBarProps = {
    backgroundColor: string;
    barStyle?: StatusBarStyle;
};

export default function CustomStatusBar({
    backgroundColor,
    barStyle = 'light-content',
}: CustomStatusBarProps) {
    const insets = useSafeAreaInsets();

    return (
        <View style={{ height: insets.top, backgroundColor }}>
            <StatusBar
                animated={true}
                backgroundColor={backgroundColor}
                barStyle={barStyle}
            />
        </View>
    );
}
