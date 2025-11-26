import {Text, View, StyleSheet, Image} from 'react-native';
import typeColors from './colorSheet';



export default function StatsTemplate({battle}) {
 const  {hp, atk, def, spat, spdef, spd, pokeName, pokePic } = battle.params;

 return (
  <View style={styles.container}>
      <Text style={styles.pokemonName}>{pokeName}
       </Text>
      <View style={styles.pokeBox}>
        <Image source={pokePic} style={styles.pokemon} resizeMode='contain'/>
      </View>
        <View style={styles.statsBox}>
          <Text style={styles.stats}>----------------------------------------------STATS---------------------------------------------------------------------- </Text>
          <Text style={styles.statsNum}> Health: {hp} </Text>
          <Text> </Text>
          <Text style={styles.statsNum}> Attack: {atk} </Text>
          <Text> </Text>
          <Text style={styles.statsNum}> Defense: {def} </Text>
          <Text> </Text>
          <Text style={styles.statsNum}> Special Attack: {spat} </Text>
          <Text> </Text>
          <Text style={styles.statsNum}> Special Defense: {spdef} </Text>
          <Text> </Text>
          <Text style={styles.statsNum}> Speed: {spd} </Text>
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
   height: 300,
  },
  statsBox: {
   height: 380,
   width: 1250,
   backgroundColor: 'yellow',
   justifyContent: 'collumn',
  },
  statsNum:{
    fontSize: 20,
  },
  pokemon: {
   height: 300,
   width: 300,
  },
  pokemonName: {
   height: 60,
   width: 1080,
   fontSize: 50,
   backgroundColor: 'lime',
   justifyContent: 'center',
   textAlign: 'center',
 },
  stats: {
   height: 30,
   width: 1080,
   backgroundColor: 'cyan',
   justifyContent: 'center',
   fontSize:25,
  },
})

