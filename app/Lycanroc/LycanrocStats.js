import StatsTemplate from '../../components/StatsTemplate'
import { pokeStats, typePhotos } from '../../data/lycanrocks'

export default function lycanrocStats(){
    const placeholder = {
        hp: pokeStats.lycanroc.hp,
        atk: pokeStats.lycanroc.atk,
        def: pokeStats.lycanroc.def,
        spat: pokeStats.lycanroc.spatk,
        spdef: pokeStats.lycanroc.spdef,
        spd: pokeStats.lycanroc.spd,
        type1: 'rock',
        type2: 'normal',
        pokeName: 'Lycanroc',
        pokePic: { uri: typePhotos.lycanroc},
        
    }

    return <StatsTemplate battle={{ params: placeholder }}/>
}