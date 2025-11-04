import { images } from '../constant';
import NavigationStrings from '../navigation/NavigationStrings';
import * as Screens from '../screens';

export const genreConfig = [
  { title: 'Hip-Hop', id: 1 },
  { title: 'R&B', id: 2 },
  { title: 'Alternative', id: 3 },
  { title: 'POP', id: 4 },
  { title: 'Rock', id: 5 },
  { title: 'Electronic', id: 6 },
  { title: 'Jazz', id: 7 },
];

export const albumConfig = [
  { id: '1', title: 'After Hours', artist: 'The Weeknd', image: images.album1 },
  { id: '2', title: 'Scorpion', artist: 'Drake', image: images.album2 },
  { id: '3', title: 'Divide', artist: 'Ed Sheeran', image: images.album3 },
  { id: '4', title: '1989', artist: 'Taylor Swift', image: images.album4 },
  { id: '4', title: '1989', artist: 'Taylor Swift', image: images.album5 },
];

export const artistConfig = [
  { title: 'Drake', id: 1, image: images.artist1 },
  { title: 'Dua Lipa', id: 2, image: images.artist2 },
  { title: 'Taylor Swift', id: 3, image: images.artist3 },
  { title: 'Eminem', id: 4, image: images.artist4 },
  { title: 'Future', id: 5, image: images.artist5 },
  { title: 'Billie Eilish', id: 6, image: images.artist6 },
  { title: 'Ed Sheeran', id: 7, image: images.artist7 },
  { title: 'Sia', id: 8, image: images.artist8 },
  { title: 'Ariana Grande', id: 9, image: images.artist9 },
  { title: 'Bruno Mars', id: 10, image: images.artist10 },
  { title: 'Rihanna', id: 11, image: images.artist1 },
  { title: 'Nicki Minaj', id: 12, image: images.artist1 },
  { title: 'Rihanna', id: 13, image: images.artist1 },
  { title: 'Rihanna', id: 13, image: images.artist1 },
];

export const podcastConfig = [
  { title: 'Hip-Hop', id: 1, type: 'Podcast', image: images.podcast1 },
  { title: 'R&B', id: 2, type: 'Podcast', image: images.podcast2 },
  { title: 'Alternative', id: 3, type: 'Podcast', image: images.podcast3 },
  { title: 'POP', id: 4, type: 'Podcast', image: images.podcast4 },
  { title: 'Rock', id: 5, type: 'Podcast', image: images.podcast5 },
  { title: 'Electronic', id: 6, type: 'Podcast', image: images.podcast6 },
  { title: 'Jazz', id: 7, type: 'Podcast', image: images.podcast1 },
  { title: 'Hip-Hop', id: 8, type: 'Podcast', image: images.podcast2 },
  { title: 'Hip-Hop', id: 9, type: 'Podcast', image: images.podcast3 },
  { title: 'Hip-Hop', id: 10, type: 'Podcast', image: images.podcast4 },
  { title: 'Hip-Hop', id: 11, type: 'Podcast', image: images.podcast5 },
  { title: 'Hip-Hop', id: 12, type: 'Podcast', image: images.podcast6 },
  { title: 'Hip-Hop', id: 13, type: 'Podcast' },
  { title: 'Hip-Hop', id: 14, type: 'Podcast' },
  { title: 'Hip-Hop', id: 15, type: 'Podcast' },
  { title: 'Hip-Hop', id: 16, type: 'Podcast' },
];

export const songCardConfig = [
  {
    image: images.song1,
    title: 'I Can See You',
    artist: 'Taylor Swift',
    length: '03:23 min',
  },
  {
    image: images.song2,
    title: 'Illusion',
    artist: 'Taylor Swift',
    length: '03:23 min',
  },
  {
    image: images.song1,
    title: 'Until I bleed out',
    artist: 'Weekend',
    length: '03:23 min',
  },
  {
    image: images.song2,
    title: 'Taking to the moon',
    artist: 'Bruno Mars',
    length: '03:23 min',
  },
  {
    image: images.song1,
    title: 'To the sky',
    artist: 'Coldplay',
    length: '03:23 min',
  },
  {
    image: images.song2,
    title: 'Girls like you',
    artist: 'Maroon5',
    length: '03:23 min',
  },
  {
    image: images.song1,
    title: 'Unstoppable',
    artist: 'Sia',
    length: '03:23 min',
  },
  {
    image: images.song2,
    title: 'Bones',
    artist: 'Imagine Dragons',
    length: '03:23 min',
  },
];
