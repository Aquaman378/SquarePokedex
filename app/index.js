import { StatusBar } from 'expo-status-bar';
import LinkButton from '../components/LinkButton';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>All the Pokémon data you'll ever need in one place!</Text>
      <Text style={styles.subtitle}>Thousands of data compiled into one place</Text>
      <Image
        source={{ uri: 'https://thvnext.bing.com/th/id/OIP.u2IP_SZQg8F28UwkTnQivwHaC0?w=337&h=132&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3&ucfimg=1' }}
        style={{ width: 410, height: 165, borderColor: 'black', borderWidth: 2 }}
      />

      <View style={styles.imageRow}>
        <Link href="/pokemon/pikachu">
          <Image
            source={{ uri: 'https://img.pokemondb.net/artwork/large/pikachu.jpg' }}
            style={styles.pokemon}
          />
        </Link>

        <Link href="/pokemon/charmander">
          <Image
            source={{ uri: 'https://img.pokemondb.net/artwork/large/charmander.jpg' }}
            style={styles.pokemon}
          />
        </Link>

        <Link href="/pokemon/aegislash">
          <Image
            source={{ uri: 'https://img.pokemondb.net/artwork/large/aegislash.jpg' }}
            style={styles.pokemon}
          />
        </Link>

        <Link href="/app/Tyranitar/tyranitar.js">
          <Image
            source={{ uri: 'https://img.pokemondb.net/artwork/large/tyranitar.jpg' }}
            style={styles.pokemon}
          />
        </Link>

        <Link href="/pokemon/lycancroc">
          <Image
            source={{ uri: 'https://img.pokemondb.net/artwork/avif/lycanroc-midnight.avif' }}
            style={styles.pokemon}
          />
        </Link>


        <Link href="/pokemon/lucario">
          <Image
            source={{ uri: 'https://img.pokemondb.net/artwork/large/lucario.jpg' }}
            style={styles.pokemon}
          />
        </Link>

        <Link href="/pokemon/blaziken">
          <Image
            source={{ uri: 'https://img.pokemondb.net/artwork/large/blaziken.jpg' }}
            style={styles.pokemon}
          />
        </Link>

        <Link href="/pokemon/garchomp">
          <Image
            source={{ uri: 'https://img.pokemondb.net/artwork/large/garchomp.jpg' }}
            style={styles.pokemon}
          />
        </Link>

      </View>
      <View>
        <Text style={styles.title}>Click on a Pokemon to learn more!</Text>
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
