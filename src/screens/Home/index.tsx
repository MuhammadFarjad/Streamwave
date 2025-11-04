import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Container, ProfileHeader, AlbumCard, ArtistCard, SongCard } from '../../components';
import { COLORS } from '../../constant';
import styles from './styles';
import { albumConfig, artistConfig, songCardConfig } from '../../config';

const Home: React.FC = () => {
  const [selectedId, setSelectedId] = useState('1');

  const handleProfileClick = () => {
    // navigate(NavigationStrings.PROFILE);
  };

  const renderAlbum = ({ item }: { item: typeof albumConfig[0] }) => (
    <AlbumCard
      image={item.image}
      title={item.title}
      artist={item.artist}
    />
  );

  const renderArtist = ({ item }: { item: typeof artistConfig[0] }) => (
    <ArtistCard
      id={item.id}
      title={item.title}
      image={item.image}
      selectable={false}
    />
  );

  return (
    <Container style={styles.Container}>
      <ScrollView>
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
            data={albumConfig}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
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

        <View style={styles.listCont}>
          <FlatList
            data={artistConfig}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderArtist}
            contentContainerStyle={{ paddingRight: 10 }}
          />
        </View>
        <View style={styles.contentCont}>
          <Text style={styles.titleCont}>Recommendation</Text>
          <TouchableOpacity>
            <Text style={[styles.titleCont, { color: COLORS.primary }]}>
              View All
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardCont}>
          <FlatList
            data={songCardConfig}
            keyExtractor={(index) => index.toString()}
            renderItem={({ item }) => (
              <SongCard
                title={item.title}
                image={item.image}
                artist={item.artist}
                length={item.length}
              />
            )}
          />
        </View></ScrollView>
    </Container>
  );
};

export default Home;
