import { useState } from 'react';
import LoginForms from '../../Components/LoginForms';
import InitialPokemons from '../InitialPokemons';
import './Login.css';

export default function Login( { setNewTrainer, trainer, pokemonChosen} ) {

    const [changePage, setChangePage] = useState(false);

    const onPokemonChosen = (value) => {
        pokemonChosen(value);
    }

    function advancePage(changePage) {
        if(changePage) {
            return (
                <InitialPokemons pokemonChosen={e => onPokemonChosen(e)} />
            );
        } else {
            return(
                <LoginForms setNewTrainer={setNewTrainer} trainer={trainer} advancePage={setChangePage}/>
            );
        }
    }

    return (
        <>{advancePage(changePage)}</>
    )
};