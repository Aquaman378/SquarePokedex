// app/battleScreen.js

import React, { useState } from 'react'
import { View, Text, Image, Pressable, ScrollView, StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import LinkButton from '../components/LinkButton'
import BattleUI from '../components/battleUI'
import { pokeStats } from '../data/lycanrocks';


const DEFAULT_PLAYER_DATA = {}
const DEFAULT_ENEMY_DATA = {}

export default function BattleScreen() {
    const params = useLocalSearchParams()
    const data = params.data ? JSON.parse(decodeURIComponent(params.data)) : null

    const player = data?.player || DEFAULT_PLAYER_DATA
    const enemy = data?.enemy || DEFAULT_ENEMY_DATA
    

    if (!player || !enemy || !player.moves || !enemy.moves) {
        return (
            <Text style={{ flex: 1, textAlign: 'center', marginTop: 50 }}>
                Initializing Battle...
            </Text>
        )
    }

    const [battle] = useState(() => new BattleUI(player, enemy))
    const [state, setState] = useState(battle.getState())

    function update() {
        setState({ ...battle.getState() })
    }

    function playerMove(index) {
        if (state.player.currentHP <= 0 || state.enemy.currentHP <= 0) return

        const result = battle.attack('player', index)
        update()

        if (result?.fainted) return

        battle.performEnemyTurn()
        update()
    }

    function hpPercent(current, max) {
        return Math.max(0, Math.floor((current / max) * 100))
    }

    const battleOver = state.player.currentHP <= 0 || state.enemy.currentHP <= 0
    const playerWin = state.enemy.currentHP <= 0

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pokémon Battle</Text>

            {battleOver && (
                <View style={styles.messageBox}>
                    <Text style={styles.messageText}>
                        {playerWin ? `${state.player.name} won!` : `${state.enemy.name} won!`}
                    </Text>
                    <LinkButton
                        href="/"
                        imageUrl="https://raw.githubusercontent.com/tiago1820/pokemon-pi/main/client/src/images/icons/home.png?raw=true"
                    />
                </View>
            )}

            <View style={styles.arena}>
                <View style={styles.enemySide}>
                    <Text style={styles.name}>
                        {state.enemy.name} Lv {state.enemy.level}
                    </Text>
                    <Image source={{ uri: state.enemy.photo }} style={styles.monImage} />
                    <View style={styles.hpBarOuter}>
                        <View
                            style={[
                                styles.hpBarInner,
                                { width: hpPercent(state.enemy.currentHP, state.enemy.maxHP) + '%' }
                            ]}
                        />
                    </View>
                    <Text>
                        HP {state.enemy.currentHP} / {state.enemy.maxHP}
                    </Text>
                </View>

                <View style={styles.playerSide}>
                    <Text style={styles.name}>
                        {state.player.name} Lv {state.player.level}
                    </Text>
                    <Image source={{ uri: state.player.photo }} style={styles.monImage} />
                    <View style={styles.hpBarOuter}>
                        <View
                            style={[
                                styles.hpBarInner,
                                { width: hpPercent(state.player.currentHP, state.player.maxHP) + '%' }
                            ]}
                        />
                    </View>
                    <Text>
                        HP {state.player.currentHP} / {state.player.maxHP}
                    </Text>
                </View>
            </View>

            <View style={styles.movesGrid}>
                {state.player.moves.map((move, i) => (
                    <Pressable
                        key={i}
                        style={[
                            styles.moveBtn,
                            battleOver && styles.disabledBtn
                        ]}
                        onPress={() => !battleOver && playerMove(i)}
                    >
                        <Text style={styles.moveText}>{move.name}</Text>
                        <Text style={styles.moveSub}>
                            {move.type} | {move.power || '-'}
                        </Text>
                    </Pressable>
                ))}
            </View>

            <ScrollView style={styles.logBox}>
                {[...state.log].reverse().map((entry, i) => (
                    <Text key={i} style={styles.logEntry}>
                        {entry.move}
                    </Text>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
    arena: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 },
    enemySide: { alignItems: 'center', width: '48%' },
    playerSide: { alignItems: 'center', width: '48%' },
    monImage: { width: 120, height: 120 },
    name: { fontWeight: 'bold', marginBottom: 4 },
    hpBarOuter: { width: '100%', height: 12, backgroundColor: '#ccc', borderRadius: 4 },
    hpBarInner: { height: '100%', backgroundColor: '#4caf50', borderRadius: 4 },
    movesGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
    moveBtn: {
        width: '48%',
        padding: 12,
        backgroundColor: '#222',
        borderRadius: 6,
        marginBottom: 10,
        alignItems: 'center'
    },
    disabledBtn: { backgroundColor: '#666' },
    moveText: { color: 'white', fontWeight: 'bold' },
    moveSub: { color: '#bbb', fontSize: 11 },
    logBox: { flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 8 },
    logEntry: { fontSize: 13 },
    messageBox: {
        padding: 10,
        backgroundColor: '#ffcb05',
        borderRadius: 8,
        alignItems: 'center'
    },
    messageText: { fontSize: 18, fontWeight: 'bold' }
})
