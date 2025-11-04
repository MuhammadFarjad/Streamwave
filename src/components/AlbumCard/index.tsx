import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { albumCardardProps } from '../types';

const AlbumCard: React.FC<albumCardardProps> = ({
    image,
    title,
    artist,
    width,
    height,
}) => {
    return (
        <TouchableOpacity style={[styles.container, { width }]}>
            <Image
                source={image}
                style={[
                    styles.image,
                    {
                        width: width || styles.image.width,
                        height: height || styles.image.height,
                    },
                ]}
            />
            <Text style={styles.txt}>{artist}</Text>
            <Text style={styles.txt2}>{title}</Text>
        </TouchableOpacity>
    );
};

export default AlbumCard;
