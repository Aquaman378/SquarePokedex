import { StyleSheet, SafeAreaView, Button, Text, View } from 'react-native';

let ATK = 0;
let DEF = 0;
const BP = 10;
const isSpecial = false;
const crit = Math.floor(Math.random * 16) + 1;
let q=false;
const type = () => {
  typeCompare();
  special();
  if (q==true){
  if (crit == 16) {
    console.log('It was a critical hit!');
    console.log(
      (Math.floor(
        Math.floor((Math.floor((2 * 100) / 5 + 2) * ATK * BP) / DEF) / 50
      ) +
        2) *
      1.5 *2
    );
  } else
    console.log(
      Math.floor(
        (Math.floor((Math.floor((2 * 100) / 5 + 2) * ATK * BP) / DEF) / 50
      ) + 2 )*2
    );
}else{
  if (crit == 16) {
    console.log('It was a critical hit!');
    console.log(
      (Math.floor(
        Math.floor((Math.floor((2 * 100) / 5 + 2) * ATK * BP) / DEF) / 50
      ) +
        2) *
      1.5
    );
  } else
    console.log(
      Math.floor(
        Math.floor((Math.floor((2 * 100) / 5 + 2) * ATK * BP) / DEF) / 50
      ) + 2
    );
}
}

const special = () => {
  if (isSpecial) {
    ATK = 100;
    DEF = 50;
  } else {
    ATK = 50;
    DEF = 100;
  }
}

const typeCompare = () =>{
  if(user.getWeak()==opp.getType)
  q=true;
}

export default function App() {
  type();
}