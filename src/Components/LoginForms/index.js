import './LoginForms.css';
import SwitchFemaleMale from '../SwitchFemaleMale';
import InputText from '../InputText';
import DoctorDialog from '../DoctorDialog';
import { useState } from 'react';

export default function LoginForms({ setNewTrainer, trainer, advancePage }) {

    const [isDialogVisible, setDialogVisibility] = useState(false);

    function showDialog() {
        if (trainer.name !== '') {
            setDialogVisibility(true);
        } else {
            alert('Você deve preencher o campo nome!');
        }
    }

    function changeToInitial() {
        if (trainer.name !== '') {
            advancePage(true);
        }
    }

    return (
        <section className='login-page'>
            <div className='welcome'>
                <img draggable={false} src='./Projeto-Pokedex/images/pokemon-logo-4-1.png' alt='Logo do Pokémon' />
                <img draggable={false} src='./Projeto-Pokedex/images/pikachuLogin.png' alt='Pikachu acenando' />
            </div>
            <div className='login-data'>
                <div className='login-card'>
                    <h1>Boas vindas ao Pokémon!</h1>
                    <p>Insira seus dados: </p>
                    <InputText className='login-input' setNewTrainer={setNewTrainer} trainer={trainer} label='Nome:' />
                    <SwitchFemaleMale setNewTrainer={setNewTrainer} trainer={trainer} label='Gênero:' />
                    <button onClick={(evento => showDialog())}>Iniciar Jornada!</button>
                </div>
            </div>
            {isDialogVisible ? (<DoctorDialog name={trainer.name} changeToInitial={changeToInitial} />) : null}
        </section>
    );
};