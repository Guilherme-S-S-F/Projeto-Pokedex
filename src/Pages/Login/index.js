import { useState } from 'react';
import LoginForms from '../../Components/LoginForms';
import './Login.css';
import InitialPokemons from '../InitialPokemons';

export default function Login( { setNewTrainer, trainer } ) {

    const [change, setChange] = useState(false);

    function changeLoginScreen(change) {
        if(change) {
            return (
                <InitialPokemons />
            );
        } else {
            return(
                <LoginForms setNewTrainer={setNewTrainer} trainer={trainer} setChange={setChange} />
            );
        }
    }

    return (
        <div>{changeLoginScreen(change)}</div>
    )
};