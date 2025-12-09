import StatsTemplate from '../../components/StatsTemplate'
import { pokeStats, typePhotos } from '../../data/lycanrocks'

export default function TyranitarStats(){
    const placeholder = {
        hp: pokeStats.tyranitar.hp,
        atk: pokeStats.tyranitar.atk,
        def: pokeStats.tyranitar.def,
        spat: pokeStats.tyranitar.spatk,
        spdef: pokeStats.tyranitar.spdef,
        spd: pokeStats.tyranitar.spd,
        type1: 'rock',
        type2: 'dark',
        pokeName: 'Tyranitar',
        pokePic: { uri: typePhotos.tyranitar},
        
    }

    return <StatsTemplate battle={{ params: placeholder }}/>
}