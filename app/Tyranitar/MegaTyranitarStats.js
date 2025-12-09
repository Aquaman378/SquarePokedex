import StatsTemplate from '../../components/StatsTemplate'
import { pokeStats, typePhotos } from '../../data/lycanrocks'

export default function megaTyranitarStats(){
    const placeholder = {
        hp: pokeStats.megaTyranitar.hp,
        atk: pokeStats.megaTyranitar.atk,
        def: pokeStats.megaTyranitar.def,
        spat: pokeStats.megaTyranitar.spatk,
        spdef: pokeStats.megaTyranitar.spdef,
        spd: pokeStats.megaTyranitar.spd,
        type1: 'rock',
        type2: 'dark',
        pokeName: 'Mega Tyranitar',
        pokePic: { uri: typePhotos.megaTyranitar},
        
    }

    return <StatsTemplate battle={{ params: placeholder }}/>
}