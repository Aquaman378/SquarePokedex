import { StatusBar } from 'expo-status-bar';
import LinkButton from '../components/LinkButton';
import { StyleSheet, Text, View, Image } from 'react-native';
import typeColors from '../components/colorSheet';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>All the Pokémon data you'll ever need in one place!</Text>
      <Text style={styles.subtitle}>Thousands of data compiled into one place</Text>

      <Image
        source={{
          uri: 'https://github.com/tiago1820/pokemon-pi/blob/main/client/src/images/landing-page/pokemon3.jpg?raw=true',
        }}
        style={{ width: 410, height: 165, borderColor: 'black', borderWidth: 2 }}
      />

      <View style={styles.imageRow}>
        <LinkButton
          href="/Pikachu/Pikachu"
          title="Pikachu"
          imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
          backgroundColor={typeColors.electric}
        />

       <LinkButton
          href="/Charmander/Charmander"
          title="Charmander"
          imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
          backgroundColor={typeColors.fire}
        />

        <LinkButton
          href="/Aegislash/ShieldAegislash"
          title="Aegislash"
          imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/681.png"
          backgroundColor={typeColors.ghost}
        />

        <LinkButton
          href="/Tyranitar/Tyranitar"
          title="Tyranitar"
          imageUrl="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/248.png"
          backgroundColor={typeColors.rock}
        />


        <LinkButton
          href="/Lycanroc/Lycanroc"
          title="Lycanroc"
          imageUrl="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/745_f2.png"
          backgroundColor={typeColors.rock}
        />

        <LinkButton
          href="/Lucario/Lucario"
          title="Lucario"
          imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png"
          backgroundColor={typeColors.fighting}
        />

        <LinkButton
          href="/Greninja/Greninja"
          title="Greninja"
          imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png"
          backgroundColor={typeColors.water}
        />

        <LinkButton
          href="/Garchomp/Garchomp"
          title="Garchomp"
          imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png"
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
