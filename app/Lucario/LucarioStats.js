import StatsTemplate from '../../components/StatsTemplate'
import { pokeStats, typePhotos } from '../../data/lycanrocks'

export default function lucarioStats(){
    const placeholder = {
        hp: pokeStats.lucario.hp,
        atk: pokeStats.lucario.atk,
        def: pokeStats.lucario.def,
        spat: pokeStats.lucario.spatk,
        spdef: pokeStats.lucario.spdef,
        spd: pokeStats.lucario.spd,
        type1: 'fighting',
        type2: 'steel',
        pokeName: 'Lucario',
        pokePic: { uri: typePhotos.lucario},
        
    }

    return <StatsTemplate battle={{ params: placeholder }}/>
}