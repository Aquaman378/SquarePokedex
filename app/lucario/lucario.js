import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import LinkButton from '../components/LinkButton';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.picture}>
        <Image source={{
            uri : "https://img.pokemondb.net/artwork/large/lucario.jpg",
          }}
          style={{width:410, height: 165, borderColor: 'black', borderWidth: 2}}
        />
      </View>
      <View>
        <Text style={styles.title}>Lucario</Text>
        <Text style={styles.bodyText}>Lucario is a Fighting/Steel type Pokémon introduced in Generation 4. {"/n"}Lucario is a bipedal canine-like Pokémon. It is blue and black in color with red eyes. It has round spikes protruding from the back of each forepaw and a third on its chest, as well as two pairs of aura sensors that are appendages hanging down from the back of its head.{"/n"} Lucario is based on the mythical creature Anubis, the jackal-headed god associated with mummification and the afterlife in ancient Egyptian religion.{"/n"}Lucario has a Mega Evolution, available in Generation 6 games and Pokémon Go.</Text>
      </View>
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
  picture: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    flex: 1,
    fontSize: 100,
  },
  bodyText: {
    flex:1,
    fontSize: 40,
  }
});