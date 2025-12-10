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

    printStats();

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
    if(ally.hp > 0 && opp.hp > 0){
        if(ally.spd > opp.spd){
            console.log(ally.name + " was faster!")
            opp.hp -= type(ally.atk,ally.spatk,opp.def,opp.spdef,80,false)
            if(opp.hp > 0){
                ally.hp -= type(opp.atk,opp.spatk,ally.def,ally.spdef,80,false)
            }
        } else if(opp.spd > ally.spd) {
            console.log(opp.name + " was faster!")
            ally.hp -= type(opp.atk,opp.spatk,ally.def,ally.spdef,80,false)
            if(ally.hp > 0){
                opp.hp -= type(ally.atk,ally.spatk,opp.def,opp.spdef,80,false)
            }
        } else if(ally.spd == opp.spd) {
            if(coin == 1){
                console.log("Speed is tied! " + ally.name + " went first!")
                opp.hp -= type(ally.atk,ally.spatk,opp.def,opp.spdef,80,false)
                if(opp.hp > 0){
                    ally.hp -= type(opp.atk,opp.spatk,ally.def,ally.spdef,80,false)
                }
            } else {
                console.log("Speed is tied! " + opp.name + " went first!")
                ally.hp -= type(opp.atk,opp.spatk,ally.def,ally.spdef,80,false)
                if(ally.hp > 0){
                    opp.hp -= type(ally.atk,ally.spatk,opp.def,opp.spdef,80,false)
                }
            }
            coin = Math.floor((Math.random()*2)+1)
        }
        if(ally.hp > 0 && opp.hp <= 0){
            console.log("You won!" + "\nTurn you won: " + turn)
        } else {
            turn++;
            printStats();
        }
    } else {
        console.log("bro you won stop")
    }
}

function printStats(){
    // print the two pokemon's names with their health and the current turn on 3 separate lines
    // one line makes for one mon, another line for the other
    // the third line, the bottomest, has the turn count; it should always be 1 here
    console.log(
        ally.name + "'s Health: " + ally.hp + 
        "\n" + opp.name + "'s Health: " + opp.hp + 
        "\nTurn: " + turn +
        "\n---------------------------------------"
    )
}

const styles = StyleSheet.create({
    title: {
    textAlign: 'center',
    marginVertical: 8,
  },

})