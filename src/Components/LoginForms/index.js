import { useState } from 'react';
import './LoginForms.css';

export default function LoginForms( { setNewName, trainerName, setChange } ) {

    return(
        <div className='login-card'>
            <h1>Boas vindas!</h1>
            <input type='text' value={trainerName} onChange={evento => setNewName(evento.target.value)} placeholder='Nome' />
            <div className='switch-malefemale'>
                <p>Mulher</p>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>
                <p>Homem</p>
            </div>
            <button onClick={(evento => setChange(true))}>Iniciar Jornada</button>
        </div>
    );
};