import { Button, View, Text, StyleSheet } from 'react-native'
import type from '../components/damageCalculations'

// variable to hold stat values of provided pokemon
let ally;
let opp;

// test variable turns
let turn = 1;
let coin = Math.floor((Math.random()*2)+1)

export function battle(allyMon, oppMon){
    // get stats of pokemon in parameter
    ally = allyMon; // ally is the player (controlled) mon,
    opp = oppMon; // opp is the opponent (CPU) mon

    // print the two pokemon's names with their health and the current turn on 3 separate lines
    // one line makes for one mon, another line for the other
    // the third line, the bottomest, has the turn count; it should always be 1 here
    console.log("\n" + ally.name + "'s Health: " + ally.hp + "\n" + opp.name + "'s Health: " + opp.hp + "\nTurn: " + turn)

    return(
        <View>
            <Button
                title="help me!"
                onPress={doThings}
            />
        </View>
    )

}

function doThings(){
    if(ally.spd > opp.spd){
        console.log(ally.name + " was faster!")
        console.log(type(ally.atk,ally.spatk,opp.def,opp.spdef,28,false))
    } else if(opp.spd > ally.spd) {
        console.log(opp.name + " was faster!")
    } else if(ally.spd == opp.spd) {
        if(coin == 1){
            console.log(ally.name + " was faster!")
        } else {
            console.log(opp.name + " was faster!")
        }
        coin = Math.floor((Math.random()*2)+1)
    }
}

const styles = StyleSheet.create({
    title: {
    textAlign: 'center',
    marginVertical: 8,
  },

})