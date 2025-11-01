import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import { COLORS, FONTS, images, SIZES } from '../../constant';
import * as Screens from '../../screens';
import NavigationStrings from '../NavigationStrings';

const Tab = createBottomTabNavigator();

export default function BottomStack() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBarStyle,

                tabBarIcon: ({ focused }) => {
                    let iconName;
                    let labelText;

                    switch (route.name) {
                        case NavigationStrings.HOME:
                            iconName = images.music;
                            labelText = 'Music';
                            break;
                        case NavigationStrings.PODCAST:
                            iconName = images.podcast;
                            labelText = 'Podcast';
                            break;
                        case NavigationStrings.RADIO:
                            iconName = images.radio;
                            labelText = 'Radio';
                            break;
                        case NavigationStrings.AUDIO_BOOKS:
                            iconName = images.audiobooks;
                            labelText = 'Audiobooks';
                            break;
                        case NavigationStrings.NEWS:
                            iconName = images.news;
                            labelText = 'News';
                            break;
                        default:
                            iconName = null;
                            labelText = '';
                    }

                    return (
                        <View style={styles.tabItem}>
                            <View style={styles.iconContainer}>
                                <Image
                                    source={iconName}
                                    style={[
                                        styles.icon,
                                        focused && styles.activeIcon
                                    ]}
                                />
                            </View>
                            <Text style={styles.label}>
                                {labelText}
                            </Text>
                        </View>
                    );
                },
            })}
        >
            <Tab.Screen
                name={NavigationStrings.HOME}
                component={Screens.Home}
            />
            <Tab.Screen
                name={NavigationStrings.PODCAST}
                component={Screens.Podcast}
            />
            <Tab.Screen
                name={NavigationStrings.RADIO}
                component={Screens.Radio}
            />
            <Tab.Screen
                name={NavigationStrings.AUDIO_BOOKS}
                component={Screens.AudioBooks}
            />
            <Tab.Screen
                name={NavigationStrings.NEWS}
                component={Screens.News}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: COLORS.black,
        borderTopWidth: 0,
        position: 'absolute',
        height: SIZES.height * 0.15,
        paddingBottom: Platform.OS === 'ios' ? 25 : 10,
        paddingTop: 8,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    icon: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
        tintColor: COLORS.grayEye,
    },
    activeIcon: {
        tintColor: COLORS.primary,
    },
    label: {
        color: COLORS.grayEye,
        ...FONTS.light10,
        marginTop: 2,
    },
});