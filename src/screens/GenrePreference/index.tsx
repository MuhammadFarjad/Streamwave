import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import { COLORS } from '../../constant';
import {
  Button,
  Header,
  SearchBar,
  Container,
  SegmentedProgressBar,
} from '../../components';
import { genreConfig } from '../../config/index';
import { Text } from 'react-native-gesture-handler';
import { navigate } from '../../navigation/Stack/NavigationRef';
import NavigationStrings from '../../navigation/NavigationStrings';
import { RootStackParamList } from '../../navigation/types/RootStackParamList';

const GenrePreference: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]); // store selected IDs

  const toggleSelection = (id: number) => {
    setSelectedGenres(
      prev =>
        prev.includes(id)
          ? prev.filter(item => item !== id) // remove if already selected
          : [...prev, id], // add new selection
    );
  };

  const handleContinue = () => {
    navigation.navigate({
      name: NavigationStrings.PREFERENCE_STACK as keyof RootStackParamList,
      params: { screen: NavigationStrings.ARTIST_PREFERENCE },
    });
  };

  const onSkipPress = () => {
    navigate({
      name: NavigationStrings.PREFERENCE_STACK as keyof RootStackParamList,
      params: { screen: NavigationStrings.ARTIST_PREFERENCE },
    });
  };

  return (
    <Container style={styles.background}>
      <Header skip background title="Select Genre" onSkipPress={onSkipPress} />
      <SegmentedProgressBar step={2} totalSteps={4} />

      <View style={styles.contentCont}>
        <View style={styles.searchBarCont}>
          <Text>Choose your genre</Text>
          <SearchBar placeholder="Search here..." />
        </View>
        <FlatList
          contentContainerStyle={styles.cardsCont}
          data={genreConfig}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => {
            const isSelected = selectedGenres.includes(item.id);
            return (
              <TouchableOpacity
                style={[
                  styles.genreCont,
                  {
                    borderWidth: isSelected ? 1 : 1,
                    borderColor: isSelected ? COLORS.primary : 'transparent',
                    backgroundColor: isSelected
                      ? COLORS.custom_transparent
                      : COLORS.inputBG,
                  },
                ]}
                onPress={() => toggleSelection(item.id)}
              >
                <Text style={styles.genreText}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View style={styles.button}>
        <Button title="Continue" onPress={handleContinue} />
      </View>
    </Container>
  );
};

export default GenrePreference;
