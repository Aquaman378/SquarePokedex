import { pokeStats, pokeMoves, typePhotos } from './lycanrocks';

export function getPreparedPokemonData(pokeKey, level = 50) {
    const base = pokeStats[pokeKey];
    if (!base) return null;

    // Calculate stats based on level
    const stats = {
        hp: Math.floor(((base.hp * 2 + 31) * level) / 100) + level + 10,
        atk: Math.floor(((base.atk * 2 + 31) * level) / 100) + 5,
        def: Math.floor(((base.def * 2 + 31) * level) / 100) + 5,
        spatk: Math.floor(((base.spatk * 2 + 31) * level) / 100) + 5,
        spdef: Math.floor(((base.spdef * 2 + 31) * level) / 100) + 5,
        spd: Math.floor(((base.spd * 2 + 31) * level) / 100) + 5,
    };

    return {
        name: base.name,
        level: level,
        stats: stats,
        maxHP: stats.hp,
        currentHP: stats.hp,
        photo: typePhotos[pokeKey] || base.photo,
        // 🛡️ THE FIX: Look up moves from the separate pokeMoves object
        moves: pokeMoves[pokeKey] || pokeMoves.default,
        types: base.types || ['Normal'] // Helper or hardcode types here too
    };
}