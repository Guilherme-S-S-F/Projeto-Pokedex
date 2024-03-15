import { useState } from 'react';
import LoginForms from '../../Components/LoginForms';
import InitialPokemons from '../InitialPokemons';
import './Login.css';

export default function Login( { setNewTrainer, trainer } ) {

    const [changePage, setChangePage] = useState(false);

    function advancePage(changePage) {
        if(changePage) {
            return (
                <InitialPokemons />
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