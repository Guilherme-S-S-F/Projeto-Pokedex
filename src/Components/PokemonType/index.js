import "./PokemonType.css";

export default function PokemonType(props) {

    return (
        <div className="pokemon-type" style={{ backgroundColor: props.color, color: props.textColor }}>
            <span>{props.type}</span>
        </div>
    );
}