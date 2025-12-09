import StatsTemplate from '../../components/StatsTemplate'
import { pokeStats, typePhotos } from '../../data/lycanrocks'

export default function raichuStats(){
    const placeholder = {
        hp: pokeStats.raichu.hp,
        atk: pokeStats.raichu.atk,
        def: pokeStats.raichu.def,
        spat: pokeStats.raichu.spatk,
        spdef: pokeStats.raichu.spdef,
        spd: pokeStats.raichu.spd,
        type1: 'electric',
        type2: 'normal',
        pokeName: 'Raichu',
        pokePic: { uri: typePhotos.raichu},
        
    }

    return <StatsTemplate battle={{ params: placeholder }}/>
}