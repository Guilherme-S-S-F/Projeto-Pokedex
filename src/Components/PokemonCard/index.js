import PokemonType from "../PokemonType";
import { getPokemonType } from "../Utils";
import "./PokemonCard.css"

export default function PokemonCard({name, types, base, pokemonClicked,id, chosen}) {
    const addZeros = (num) => {
        num = num.toString();
        let len = num.length;
        if(len !== 3) {
            (len === 1) ? num="00"+num : num="0"+num;
        } 
        return num
    }

    const onPokemonClicked = () => {
        pokemonClicked(id);
    }

    let imagePath = "./images/Pokemons/" + addZeros(id) + ".png";
    return (
        <div className={"pokemon-card" + ((chosen)? " active" : "")} onClick={onPokemonClicked}>
            <img src={imagePath}/>
            <div>
                <div className="basic-info">
                    <h3>{name}</h3>
                    <div className="types">
                    {types.map((type, index) => (                        
                        <PokemonType type={type} color={getPokemonType(type).color} textColor={getPokemonType(type).textColor}/>))}            
                    </div>
                </div>
                <div className="info">
                    <p>HP {base['HP']}</p>
                    <p>Attack {base['Attack']}</p>
                    <p>Defense {base['Defense']}</p>
                    <p>Sp. Attack {base['Sp. Attack']}</p>
                    <p>Sp. Defense {base['Sp. Defense']}</p>
                    <p>Speed {base['Speed']}</p>
                </div>
            </div>
        </div>
    );
}