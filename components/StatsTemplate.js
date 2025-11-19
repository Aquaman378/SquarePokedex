import {Text, View, StyleSheet } from 'react-native';




export default function App({battle}) {
 const{hp, atk, def, spat, spdef} = battle.param
 const{pokeName} = battle.param
 const{pokePic} = battle.param
  return (
  <View style={styles.container}>
      <Text style={styles.pokemonName}> /\/\/\/\/\/\/\/\/\/\/\/\{pokeName}/\/\/\/\/\/\/\/\/\/\/\/\
       </Text>
      <View style={styles.pokeBox}>
        <Image Source={pokePic} style={styles.pokemon} />
      </View>
        <View style={styles.statsBox}>
          <Text style={styles.stats}>---------------------------stats--------------------------- </Text>
          <Text> Hp: {hp}</Text>
          <Text> </Text>
          <Text> Attack: {atk}</Text>
          <Text> </Text>
          <Text> Defence: {def}</Text>
          <Text> </Text>
          <Text> Special Attack: {spat}</Text>
          <Text> </Text>
          <Text> Special Defence: {spdef}</Text>
        </View>


    </View >
  );  
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: 'column',
   backgroundColor: 'black',
  },
  pokeBox: {
   backgroundColor: 'pink',
   justifyContent: 'center',
   alignItems: 'center',
   height: 220,
  },
  statsBox: {
   height: 230,
   width: 550,
   backgroundColor: 'yellow',
   justifyContent: 'collumn',
  },
  pokemon: {
   height: 50,
   width: 50,
   backgroundColor: 'green',
  },
  pokemonName: {
   height: 20,
   width: 550,
   backgroundColor: 'lime',
   justifyContent: 'center',
 },
  stats: {
   height: 20,
   width: 550,
   backgroundColor: 'cyan',
   justifyContent: 'center'
  },
})

