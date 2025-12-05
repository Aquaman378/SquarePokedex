import StatsTemplate from '../../components/StatsTemplate'

export default function TyranitarStats(){
    const placeholder = {
        hp: 12,
        atk: 12,
        def: 12,
        spat: 12,
        spdef: 12,
        spd: 12,
        type: 'rock',
        pokeName: 'Tyranitar',
        pokePic: { uri: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/248.png' },
        
    }

    return <StatsTemplate battle={{ params: placeholder }}/>
}