import React from 'react';
import { TouchableOpacity, Image, Text, ImageSourcePropType } from 'react-native';
import styles from './styles';
import { ArtistCardProps } from '../types'
import { FONTS, SIZES, COLORS } from '../../constant';

const ArtistCard: React.FC<ArtistCardProps> = ({
    id,
    title,
    image,
    isSelected = false,
    onPress,
    selectable = true,
    large,
}) => {
    const handlePress = () => {
        if (selectable && onPress) {
            onPress(id);
        }
    };

    return (
        <TouchableOpacity
            style={[styles.artistCont, large && {
                height: SIZES.height * 0.15,
                width: SIZES.width * 0.3,
            }]}
            onPress={handlePress}
            activeOpacity={selectable ? 0.7 : 1} // ✅ no feedback if not selectable
        >
            <Image
                source={image}
                style={[
                    styles.artistImg,
                    selectable && {
                        borderWidth: 2,
                        borderColor: isSelected ? COLORS.primary : 'transparent',
                    }, large && {
                        height: SIZES.height * 0.1,
                        width: SIZES.height * 0.1,
                    }
                ]}
            />
            <Text style={styles.artistText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default ArtistCard;
