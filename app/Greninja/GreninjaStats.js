import StatsTemplate from '../../components/StatsTemplate'
import { pokeStats, typePhotos } from '../../data/lycanrocks'

export default function GreninjaStats(){
    const placeholder = {
        hp: pokeStats.greninja.hp,
        atk: pokeStats.greninja.atk,
        def: pokeStats.greninja.def,
        spat: pokeStats.greninja.spatk,
        spdef: pokeStats.greninja.spdef,
        spd: pokeStats.greninja.spd,
        type1: 'water',
        type2: 'dark',
        pokeName: 'Greninja',
        pokePic: { uri: typePhotos.greninja},
        
    }

    return <StatsTemplate battle={{ params: placeholder }}/>
}