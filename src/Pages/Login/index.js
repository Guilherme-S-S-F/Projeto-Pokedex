import { useState } from 'react';
import LoginForms from '../../Components/LoginForms';
import './Login.css';

export default function Login( { setNewName, trainerName } ) {

    const [change, setChange] = useState(false);

    function changeLoginScreen(change) {
        if(change) {
            return (
                <div>3 pokemon</div>
            )
        } else {
            return(
            <section className='login-page'>
                <img draggable={false} src='./images/pikachu.png'/>
                <div className='login-data'>
                    <LoginForms setNewName={setNewName} trainerName={trainerName} setChange={setChange} />
                </div>
            </section>
            )
        }
    }

    return (
        <div>{changeLoginScreen(change)}</div>
    )
};