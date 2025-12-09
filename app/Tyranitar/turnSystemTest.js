import { Button, View, Text, StyleSheet } from 'react-native'
import { pokeStats } from '../../data/lycanrocks'
import { type } from '../../components/damageCalculations'
import { testing } from '../../components/turnSystem'

export default function attemptThings(){
    return (
        testing(pokeStats.rockruff, pokeStats.pichu)
    )
}