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