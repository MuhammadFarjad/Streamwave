import React from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { COLORS, images } from '../../constant';
import styles from './styles';
import { songCardProps } from '../types'
import NavigationStrings from '../../navigation/NavigationStrings';
import { RootStackParamList } from '../../navigation/types/RootStackParamList';
import { navigate } from '../../navigation/Stack/NavigationRef';

const SongCard: React.FC<songCardProps> = ({ title, image, artist, length }) => {
    // const handleSing = () => {
    //     navigate({ name: NavigationStrings.SING as keyof RootStackParamList,
    //         params: { screen: NavigationStrings.SING }
    //      });
    // }
    return (
        <View
            style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={{ flex: 1 }}>
                <Text style={styles.titleCont}>{title}</Text>
                <View style={styles.bottomCont}>
                    <Text style={styles.txt}>{artist}</Text>
                    <View style={styles.line} />
                    <Text style={styles.txt}>{length}</Text>
                </View>
            </View>
            <Image
                style={styles.play}
                source={images.play}
            />
        </View>
    );
};

export default SongCard;