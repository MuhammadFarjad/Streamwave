import React from 'react';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { SearchBarProps } from '../types';
import { COLORS, images } from '../../constant';

const SearchBar: React.FC<SearchBarProps> = ({
    // searchQuery,
    // setSearchQuery,
    placeholder,
    // placeholderTextColor,
    showFilter = true,
    onFilterPress,
    // searchIconSource,
    // filterIconSource,
    containerStyle,
    inputStyle
}) => {
    return (
        <View style={[styles.searchContainer, containerStyle]}>
            <View style={styles.searchWrapper}>
                <TextInput
                    style={[styles.searchInput, inputStyle]}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.white}
                    // value={searchQuery}
                    // onChangeText={setSearchQuery}
                />
                
            </View>
            <Image
                    source={images.search}
                    style={styles.searchIcon}
                />
            {showFilter && (
                <TouchableOpacity
                    style={styles.filterBtn}
                    onPress={onFilterPress}
                >
                    {/* <Image
                        source={filterIconSource}
                        style={styles.filterIcon}
                    /> */}
                </TouchableOpacity>
            )}
        </View>
    );
};

export default SearchBar;