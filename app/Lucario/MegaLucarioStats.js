import StatsTemplate from '../../components/StatsTemplate'
import { pokeStats, typePhotos } from '../../data/lycanrocks'

export default function megaLucarioStats(){
    const placeholder = {
        hp: pokeStats.megaLucario.hp,
        atk: pokeStats.megaLucario.atk,
        def: pokeStats.megaLucario.def,
        spat: pokeStats.megaLucario.spatk,
        spdef: pokeStats.megaLucario.spdef,
        spd: pokeStats.megaLucario.spd,
        type1: 'fighting',
        type2: 'steel',
        pokeName: 'Mega Lucario',
        pokePic: { uri: typePhotos.megaLucario},
        
    }

    return <StatsTemplate battle={{ params: placeholder }}/>
}