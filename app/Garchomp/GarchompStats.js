import StatsTemplate from '../../components/StatsTemplate'
import { pokeStats, typePhotos } from '../../data/lycanrocks'

export default function garchompStats(){
    const placeholder = {
        hp: pokeStats.garchomp.hp,
        atk: pokeStats.garchomp.atk,
        def: pokeStats.garchomp.def,
        spat: pokeStats.garchomp.spatk,
        spdef: pokeStats.garchomp.spdef,
        spd: pokeStats.garchomp.spd,
        type1: 'dragon',
        type2: 'ground',
        pokeName: 'Garchomp',
        pokePic: { uri: typePhotos.garchomp},
        
    }

    return <StatsTemplate battle={{ params: placeholder }}/>
}