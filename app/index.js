import { StatusBar } from 'expo-status-bar';
import LinkButton from '../components/LinkButton';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>All the Pokémon data you'll ever need in one place!</Text>
      <Text style={styles.subtitle}>Thousands of data compiled into one place</Text>

      <LinkButton page="/pokedex" title="Explore Pokédex" backgroundColor="#FFCB05" />

      <View style={styles.imageRow}>
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' }}
          style={styles.pokemon}
        />
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' }}
          style={styles.pokemon}
        />
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' }}
          style={styles.pokemon}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerTitle}>PokéDex</Text>
        <Text style={styles.footerText}>Our Favorite Pokémon</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
  pokemon: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
  },
  footer: {
    backgroundColor: '#FFCB05',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 18,
    position: 'absolute',
    bottom: 0,
  },
  footerTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerText: {
    color: '#2D2D2D',
  },
});
