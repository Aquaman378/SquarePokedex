// app/SelectScreen.js
import { View, Text, Pressable, StyleSheet, Image, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import { useState, useMemo } from 'react';
import { pokeStats } from '../data/lycanrocks';
import { getPreparedPokemonData } from '../data/pokemonUtils';

const { width } = Dimensions.get('window');

export default function SelectScreen() {
    const [index, setIndex] = useState(0);
    const pokemonKeys = useMemo(() => Object.keys(pokeStats), []);

    // 1. Get current selection and enemy
    const playerData = getPreparedPokemonData(pokemonKeys[index]);
    const ENEMY_DATA = getPreparedPokemonData('lycanroc', 50);

    if (!playerData || !ENEMY_DATA) return <Text>Loading Pokémon Data...</Text>;

    const nextPoke = () => setIndex((index + 1) % pokemonKeys.length);
    const prevPoke = () => setIndex((index - 1 + pokemonKeys.length) % pokemonKeys.length);

    const battleData = JSON.stringify({ player: playerData, enemy: ENEMY_DATA });

    return (
        <View style={styles.container}>
            <Text style={styles.header}>CHOOSE YOUR POKÉMON</Text>
            
            <View style={styles.carousel}>
                <Pressable onPress={prevPoke} style={styles.navBtn}><Text style={styles.navText}>◀</Text></Pressable>

                <View style={styles.card}>
                    <Image source={{ uri: playerData.photo }} style={styles.pokeImg} resizeMode="contain" />
                    <Text style={styles.pokeName}>{playerData.name}</Text>
                    
                    {/* Stats Section */}
                    <View style={styles.statGrid}>
                        <StatItem label="HP" value={playerData.stats?.hp} color="#FF0000" />
                        <StatItem label="ATK" value={playerData.stats?.atk} color="#F08030" />
                        <StatItem label="DEF" value={playerData.stats?.def} color="#F8D030" />
                        <StatItem label="SPD" value={playerData.stats?.spd} color="#F85888" />
                    </View>

                    {/* Moves Section - Now showing Power & Type */}
                    <Text style={styles.sectionTitle}>MOVESET</Text>
                    <View style={styles.moveList}>
                        {playerData.moves.slice(0, 4).map((move, i) => (
                            <View key={i} style={styles.moveRow}>
                                <Text style={styles.moveName}>{move.name}</Text>
                                <View style={[styles.typeBadge, { backgroundColor: getTypeColor(move.type) }]}>
                                    <Text style={styles.typeText}>{move.type}</Text>
                                </View>
                                <Text style={styles.movePower}>{move.power || '--'}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                <Pressable onPress={nextPoke} style={styles.navBtn}><Text style={styles.navText}>▶</Text></Pressable>
            </View>
            
            <Link href={{ pathname: '/battleScreen', params: { data: encodeURIComponent(battleData) } }} asChild>
                <Pressable style={styles.battleBtn}>
                    <Text style={styles.battleBtnText}>BATTLE!</Text>
                </Pressable>
            </Link>
        </View>
    );
}

// Sub-component for stats
function StatItem({ label, value, color }) {
    return (
        <View style={styles.statItem}>
            <Text style={[styles.statLabel, { color }]}>{label}</Text>
            <Text style={styles.statValue}>{value}</Text>
        </View>
    );
}

// Helper for type colors
function getTypeColor(type) {
    const colors = { Fire: '#F08030', Water: '#6890F0', Grass: '#78C850', Electric: '#F8D030', Psychic: '#F85888', Rock: '#B8A038', Normal: '#A8A878' };
    return colors[type] || '#A8A878';
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#121212', alignItems: 'center', paddingVertical: 40 },
    header: { color: 'white', fontSize: 24, fontWeight: 'bold', letterSpacing: 2 },
    carousel: { flexDirection: 'row', alignItems: 'center', flex: 1, width: '100%', justifyContent: 'center' },
    navBtn: { padding: 20 },
    navText: { color: 'white', fontSize: 30 },
    card: { width: width * 0.75, backgroundColor: '#FFF', borderRadius: 20, padding: 20, alignItems: 'center' },
    pokeImg: { width: 150, height: 150 },
    pokeName: { fontSize: 22, fontWeight: 'bold', marginVertical: 5 },
    statGrid: { flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginVertical: 10 },
    statItem: { alignItems: 'center' },
    statLabel: { fontSize: 10, fontWeight: 'bold' },
    statValue: { fontSize: 16, fontWeight: 'bold' },
    sectionTitle: { fontWeight: 'bold', alignSelf: 'flex-start', marginTop: 10, fontSize: 12, color: '#666' },
    moveList: { width: '100%', marginTop: 5 },
    moveRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5, paddingVertical: 4, borderBottomWidth: 0.5, borderColor: '#EEE' },
    moveName: { fontSize: 13, flex: 2, fontWeight: '500' },
    typeBadge: { paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4, flex: 1, alignItems: 'center' },
    typeText: { color: 'white', fontSize: 9, fontWeight: 'bold' },
    movePower: { fontSize: 13, flex: 1, textAlign: 'right', color: '#666' },
    battleBtn: { backgroundColor: 'red', paddingVertical: 15, paddingHorizontal: 60, borderRadius: 30, marginBottom: 20 }, //button style
    battleBtnText: { color: 'white', fontWeight: 'bold', fontSize: 18 }
});