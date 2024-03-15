import { useState } from 'react';
import LoginForms from '../../Components/LoginForms';
import './Login.css';

export default function Login( { setNewTrainer, trainer } ) {

    const [change, setChange] = useState(false);

    function changeLoginScreen(change) {
        if(change) {
            return (
                <div>3 pokemon</div>
            )
        } else {
            return(
            <section className='login-page'>
                <div className='welcome'>
                    <img draggable={false} src='./images/pokemon-logo-4-1.png'/>
                    <img draggable={false} src='./images/pikachuLogin.png'/>
                </div>
                <div className='login-data'>
                    <LoginForms setNewTrainer={setNewTrainer} trainer={trainer} setChange={setChange} />
                </div>
            </section>
            )
        }
    }

    return (
        <div>{changeLoginScreen(change)}</div>
    )
};