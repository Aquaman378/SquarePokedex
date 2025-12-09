import StatsTemplate from '../../components/StatsTemplate'
import { pokeStats, typePhotos } from '../../data/lycanrocks'

export default function ashGreninjaStats(){
    const placeholder = {
        hp: pokeStats.ashGreninja.hp,
        atk: pokeStats.ashGreninja.atk,
        def: pokeStats.ashGreninja.def,
        spat: pokeStats.ashGreninja.spatk,
        spdef: pokeStats.ashGreninja.spdef,
        spd: pokeStats.ashGreninja.spd,
        type1: 'water',
        type2: 'dark',
        pokeName: 'Ash Greninja',
        pokePic: { uri: typePhotos.ashGreninja},
        
    }

    return <StatsTemplate battle={{ params: placeholder }}/>
}