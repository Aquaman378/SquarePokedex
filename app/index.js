import { StatusBar } from 'expo-status-bar';
import LinkButton from '../components/LinkButton';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import typeColors from '../components/colorSheet';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>All the Pokémon data you'll ever need in one place!</Text>
      <Text style={styles.subtitle}>Thousands of data compiled into one place</Text>

      <Image
        source={{
          uri: 'https://thvnext.bing.com/th/id/OIP.u2IP_SZQg8F28UwkTnQivwHaC0?w=337&h=132&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3&ucfimg=1',
        }}
        style={{ width: 410, height: 165, borderColor: 'black', borderWidth: 2 }}
      />

      <View style={styles.imageRow}>
        <LinkButton
          page="Tyranitar/tyranitar"
          title="Pikachu"
          imageUrl="https://img.pokemondb.net/artwork/large/pikachu.jpg"
          backgroundColor={typeColors.electric}
        />

       <LinkButton
          page="Tyranitar/tyranitar"
          title="Charmander"
          imageUrl="https://img.pokemondb.net/artwork/large/charmander.jpg"
          backgroundColor={typeColors.fire}
        />

        <LinkButton
          page="Tyranitar/tyranitar"
          title="Aegislash"
          imageUrl="https://img.pokemondb.net/artwork/large/aegislash.jpg"
          backgroundColor={typeColors.steel}
        />

        <LinkButton
          page="tyranitar"
          title="Tyranitar"
          imageUrl="https://img.pokemondb.net/artwork/large/tyranitar.jpg"
          backgroundColor={typeColors.rock}
        />


        <LinkButton
          page="Tyranitar/tyranitar"
          title="Lycanroc"
          imageUrl="https://img.pokemondb.net/artwork/avif/lycanroc-midnight.avif"
          backgroundColor={typeColors.rock}
        />

        <LinkButton
          page="Tyranitar/tyranitar"
          title="Lucario"
          imageUrl="https://img.pokemondb.net/artwork/large/lucario.jpg"
          backgroundColor={typeColors.fighting}
        />

        <LinkButton
          page="Tyranitar/tyranitar"
          title="Blaziken"
          imageUrl="https://img.pokemondb.net/artwork/large/blaziken.jpg"
          backgroundColor={typeColors.fire}
        />

        <LinkButton
          page="Tyranitar/tyranitar"
          title="Garchomp"
          imageUrl="https://img.pokemondb.net/artwork/large/garchomp.jpg"
          backgroundColor={typeColors.dragon}
        />
      </View>

      <Text style={styles.title}>Click on a Pokémon to learn more!</Text>

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
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 20,
    gap: 10,
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
