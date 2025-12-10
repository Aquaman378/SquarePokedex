import { StyleSheet, SafeAreaView, Button, Text, View } from 'react-native';

let crit;

export default function type(ATK, SPATK, DEF, SPDEF, BP, isSpecial){
  crit = Math.floor(Math.random() * 16) + 1;

  if (isSpecial) {
    ATK = SPATK;
    DEF = SPDEF;
  }
  if (crit == 16) {
    console.log('It was a critical hit!');
    return ( 
      (Math.floor(Math.floor((Math.floor((2 * 100) / 5 + 2) * ATK * BP) / DEF) / 50) +2) *1.5 
    )
  } else {
    return ( 
      (Math.floor(Math.floor((Math.floor((2 * 100) / 5 + 2) * ATK * BP) / DEF) / 50) +2)
    )
  }
}