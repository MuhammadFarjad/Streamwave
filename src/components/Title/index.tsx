import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, images } from '../../constant';
import styles from './styles';
import { TitleProps } from '../types';

const Title: React.FC<TitleProps> = ({ header, description}) => {


    return (
        <View>
            <Text style={styles.text}>{header}</Text>
            <Text style={styles.text2}>{description}</Text>
        </View>
    );
};

export default Title;