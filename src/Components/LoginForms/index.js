import { useState } from 'react';
import './LoginForms.css';
import SwitchFemaleMale from '../SwitchFemaleMale';
import InputText from '../InputText';

export default function LoginForms( { setNewTrainer, trainer, setChange } ) {
    return(
        <section className='login-page'>
            <div className='welcome'>
                <img draggable={false} src='./images/pokemon-logo-4-1.png'/>
                <img draggable={false} src='./images/pikachuLogin.png'/>
            </div>
            <div className='login-data'>
                <div className='login-card'>
                    <h1>Boas vindas ao<br/>Pokemon!</h1>
                    <p>Insira seus dados: </p>
                    <InputText className='login-input' setNewTrainer={setNewTrainer} trainer={trainer} label='Nome:' />
                    <SwitchFemaleMale setNewTrainer={setNewTrainer} trainer={trainer} label='Gênero:'/>
                    <button onClick={(evento => setChange(true))}>Iniciar Jornada!</button>
                </div>
            </div>
        </section>
    );
};