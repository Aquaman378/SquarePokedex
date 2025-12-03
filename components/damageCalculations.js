import { StyleSheet, SafeAreaView, Button, Text, View } from 'react-native';

const crit = Math.floor(Math.random * 16) + 1;
let q=false;
const type = (ATK,SPATK,DEF,SPDEF,BP,isSpecial) => {
  if(user.getWeak()==opp.getType)
  q=true;
  if (isSpecial) {
    ATK = SPATK;
    DEF = SPDEF;
  }
  if (q==true){
  if (crit == 16) {
    console.log('It was a critical hit!');
    console.log((Math.floor(Math.floor((Math.floor((2 * 100) / 5 + 2) * ATK * BP) / DEF) / 50) +2) *1.5 *2);
  } else
    console.log(Math.floor((Math.floor((Math.floor((2 * 100) / 5 + 2) * ATK * BP) / DEF) / 50) + 2 )*2);
}else{
  if (crit == 16) {
    console.log('It was a critical hit!');
    console.log((Math.floor(Math.floor((Math.floor((2 * 100) / 5 + 2) * ATK * BP) / DEF) / 50) +2) *1.5);
  } else
    console.log(Math.floor(Math.floor((Math.floor((2 * 100) / 5 + 2) * ATK * BP) / DEF) / 50) + 2);
}
}

export {type};