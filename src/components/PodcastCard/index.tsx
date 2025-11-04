import React from 'react';
import { TouchableOpacity, Image, Text, ImageSourcePropType } from 'react-native';
import { COLORS } from '../../constant';
import styles from './styles';

interface PodcastCardProps {
    id: number;
    title: string;
    type: string;
    image: ImageSourcePropType;
    isSelected: boolean;
    onPress: (id: number) => void;
}

const PodcastCard: React.FC<PodcastCardProps> = ({
    id,
    title,
    type,
    image,
    isSelected,
    onPress,
}) => {
    return (
        <TouchableOpacity
            style={styles.podcastCont}
            onPress={() => onPress(id)}
        >
            <Image
                source={image}
                style={[
                    styles.podcastImg,
                    {
                        borderWidth: 2,
                        borderColor: isSelected ? COLORS.primary : 'transparent',
                    },
                ]}
            />
            <Text style={styles.podcastText}>{title}</Text>
            <Text style={styles.podcasttype}>{type}</Text>
        </TouchableOpacity>
    );
};

export default PodcastCard;
