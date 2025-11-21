import {Text, View, StyleSheet, Image} from 'react-native';
import typeColors from './colorSheet';



export default function StatsTemplate({battle}) {
 const  {hp, atk, def, spat, spdef, spd, pokeName, pokePic } = battle.params;

 return (
  <View style={styles.container}>
      <Text style={styles.pokemonName}> /\/\/\/\/\/\/\/\/\/\/\/\{pokeName}/\/\/\/\/\/\/\/\/\/\/\/\
       </Text>
      <View style={styles.pokeBox}>
        <Image source={pokePic} style={styles.pokemon} resizeMode='contain'/>
      </View>
        <View style={styles.statsBox}>
          <Text style={styles.stats}>---------------------------stats--------------------------- </Text>
          <Text> Health: {hp} </Text>
          <Text> </Text>
          <Text> Attack: {atk} </Text>
          <Text> </Text>
          <Text> Defense: {def} </Text>
          <Text> </Text>
          <Text> Special Attack: {spat} </Text>
          <Text> </Text>
          <Text> Special Defense: {spdef} </Text>
          <Text> </Text>
          <Text> Speed: {spd} </Text>
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
   height: 200,
   width: 200,
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

