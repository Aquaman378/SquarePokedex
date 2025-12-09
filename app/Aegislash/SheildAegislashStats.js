import StatsTemplate from '../../components/StatsTemplate'
import { pokeStats, typePhotos } from '../../data/lycanrocks'

export default function shieldAegislashStats(){
    const placeholder = {
        hp: pokeStats.shieldAegislash.hp,
        atk: pokeStats.shieldAegislash.atk,
        def: pokeStats.shieldAegislash.def,
        spat: pokeStats.shieldAegislash.spatk,
        spdef: pokeStats.shieldAegislash.spdef,
        spd: pokeStats.shieldAegislash.spd,
        type1: 'steel',
        type2: 'ghost',
        pokeName: 'Aegislash',
        pokePic: { uri: typePhotos.shieldAegislash},
        
    }

    return <StatsTemplate battle={{ params: placeholder }}/>
}