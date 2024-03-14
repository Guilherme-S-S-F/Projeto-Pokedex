import { useState } from 'react';
import './LoginForms.css';

export default function LoginForms( { setNewTrainer, trainer, setChange } ) {

    function atGenderChange(gender) {
        gender = !trainer.gender;
        setNewTrainer(trainer.name, gender);
    }

    return(
        <div className='login-card'>
            <h1>Boas vindas!</h1>
            <input type='text' value={trainer.name} onChange={evento => setNewTrainer(evento.target.value, trainer.gender)} placeholder='Nome' required={true} />
            <div className='switch-malefemale'>
                <p>Mulher</p>
                <label className="switch">
                    <input type="checkbox" value={trainer.gender} onChange={evento => atGenderChange(trainer.gender)}/>
                    <span className="slider round"></span>
                </label>
                <p>Homem</p>
            </div>
            <button onClick={(evento => setChange(true))}>Iniciar Jornada!</button>
        </div>
    );
};