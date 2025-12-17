import { Button, View, Text, StyleSheet } from 'react-native'
import { pokeStats } from '../../data/lycanrocks'
import { battle } from '../../components/turnSystem'

export default function attemptThings(){
    return (
        battle(pokeStats.tyranitar, pokeStats.shieldAegislash)
    )
}