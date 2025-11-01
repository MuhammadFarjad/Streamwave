import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, images } from '../../constant';
import styles from './styles';
import { albumCardardProps } from '../types'

const AlbumCard: React.FC<albumCardardProps> = ({ image, title, artist }) => {

    return (
        <TouchableOpacity style={styles.container}>
            <Image
                source={image}
                style={styles.image} />
            <Text style={styles.txt}>{artist}</Text>
            <Text style={styles.txt2}>{title}</Text>
        </TouchableOpacity>
    );
};

export default AlbumCard;