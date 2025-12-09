import StatsTemplate from '../../components/StatsTemplate'
import { pokeStats, typePhotos } from '../../data/lycanrocks'

export default function megaGarchompStats(){
    const placeholder = {
        hp: pokeStats.megaGarchomp.hp,
        atk: pokeStats.megaGarchomp.atk,
        def: pokeStats.megaGarchomp.def,
        spat: pokeStats.megaGarchomp.spatk,
        spdef: pokeStats.megaGarchomp.spdef,
        spd: pokeStats.megaGarchomp.spd,
        type1: 'dragon',
        type2: 'ground',
        pokeName: 'Mega Garchomp',
        pokePic: { uri: typePhotos.megaGarchomp},
        
    }

    return <StatsTemplate battle={{ params: placeholder }}/>
}