import StatsTemplate from '../../components/StatsTemplate'
import { pokeStats, typePhotos } from '../../data/lycanrocks'

export default function charizardStats(){
    const placeholder = {
        hp: pokeStats.charizard.hp,
        atk: pokeStats.charizard.atk,
        def: pokeStats.charizard.def,
        spat: pokeStats.charizard.spatk,
        spdef: pokeStats.charizard.spdef,
        spd: pokeStats.charizard.spd,
        type1: 'fire',
        type2: 'flying',
        pokeName: 'Charizard',
        pokePic: { uri: typePhotos.charizard},
        
    }

    return <StatsTemplate battle={{ params: placeholder }}/>
}