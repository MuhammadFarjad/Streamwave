import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Image, Text } from 'react-native';
import styles from './styles';
import { COLORS, images } from '../../constant';
import {
  Button,
  Header,
  SearchBar,
  Container,
  SegmentedProgressBar,
} from '../../components';
import { podcastConfig } from '../../config/index';
import { navigate } from '../../navigation/Stack/NavigationRef';
import NavigationStrings from '../../navigation/NavigationStrings';
import { RootStackParamList } from '../../navigation/types/RootStackParamList';

const PodcastPreference: React.FC<{ navigation: any }> = ({ navigation }) => {
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
    navigation.navigate(NavigationStrings.BOTTOM_STACK);

  };

  const onSkipPress = () => {
    navigation.navigate(NavigationStrings.BOTTOM_STACK);

  };

  return (
    <Container style={styles.background}>
      <Header
        skip
        background
        title="Select Podcast"
        onSkipPress={onSkipPress}
      />
      <SegmentedProgressBar step={4} totalSteps={4} />

      <View style={styles.contentCont}>
        <View style={styles.searchBarCont}>
          <Text>Choose your genre</Text>
          <SearchBar placeholder="Search here..." />
        </View>
        <View style={styles.listCont}>
          <FlatList
            contentContainerStyle={styles.cardsCont}
            data={podcastConfig}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => {
              const isSelected = selectedGenres.includes(item.id);
              return (
                <TouchableOpacity
                  style={[styles.podcastCont]}
                  onPress={() => toggleSelection(item.id)}
                >
                  <Image
                    source={images.podcast1}
                    style={[
                      styles.podcastImg,
                      {
                        borderWidth: isSelected ? 2 : 2,
                        borderColor: isSelected
                          ? COLORS.primary
                          : 'transparent',
                      },
                    ]}
                  />
                  <Text style={styles.podcastText}>{item.title}</Text>
                  <Text style={styles.podcasttype}>{item.type}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>

      <View style={styles.button}>
        <Button title="Continue" onPress={handleContinue} />
      </View>
    </Container>
  );
};

export default PodcastPreference;
