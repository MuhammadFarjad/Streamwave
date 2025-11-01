import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Container, ProfileHeader, AlbumCard } from '../../components';
import { COLORS, images } from '../../constant';
import styles from './styles';

const Home: React.FC = () => {
  const [selectedId, setSelectedId] = useState('1');

  const albums = [
    { id: '1', title: 'After Hours', artist: 'The Weeknd', image: images.album1 },
    { id: '2', title: 'Scorpion', artist: 'Drake', image: images.album2 },
    { id: '3', title: 'Divide', artist: 'Ed Sheeran', image: images.album1 },
    { id: '4', title: '1989', artist: 'Taylor Swift', image: images.album2 },
  ];

  const handleProfileClick = () => {
    // navigate(NavigationStrings.PROFILE);
  };

  const renderAlbum = ({ item }: { item: typeof albums[0] }) => {
    const isSelected = item.id === selectedId;
    return (
      <TouchableOpacity onPress={() => setSelectedId(item.id)}>
        <AlbumCard
          image={item.image}
          title={item.title}
          artist={item.artist}
        />
      </TouchableOpacity>
    );
  };

  return (
    <Container style={styles.Container}>
      <ProfileHeader />
      <View style={styles.contentCont}>
        <Text style={styles.titleCont}>Trending Now</Text>
        <TouchableOpacity>
          <Text style={[styles.titleCont, { color: COLORS.primary }]}>
            View All
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listCont}>
        <FlatList
          data={albums}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderAlbum}
        />
      </View>
      <View style={styles.contentCont}>
        <Text style={styles.titleCont}>Top Artist</Text>
        <TouchableOpacity>
          <Text style={[styles.titleCont, { color: COLORS.primary }]}>
            View All
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Home;
