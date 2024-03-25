import "./PokemonCard.css"
import PokemonType from "../PokemonType";
import { getPokemonType } from "../Utils";

export default function PokemonCard({ name, types, base, pokemonClicked, id, chosen, buttonText }) {
    const addZeros = (num) => {
        num = num.toString();
        let len = num.length;
        if (len !== 3) {
            (len === 1) ? num = "00" + num : num = "0" + num;
        }
        return num
    }

    const onPokemonClicked = () => {
        if (pokemonClicked !== undefined)
            pokemonClicked(id);
    }

    let imagePath = "./images/pokemons/" + addZeros(id) + ".png";
    return (
        <div className={"pokemon-card" + ((chosen) ? " active" : "")}>
            <img draggable={false} src={imagePath} alt="Imagem do pokémon" />
            <div>
                <div className="basic-info">
                    <h3>{name}</h3>
                    <div className="types">
                        {types.map((type, index) => (
                            <PokemonType key={index} type={type} color={getPokemonType(type).color} textColor={getPokemonType(type).textColor} />))}
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
                <div className="button-area"><button onClick={onPokemonClicked} hidden={buttonText === "" ? true : false}>{buttonText}</button></div>
            </div>
        </div>
    );
}