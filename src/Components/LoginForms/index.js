import { useState } from 'react';
import './LoginForms.css';
import SwitchFemaleMale from '../SwitchFemaleMale';
import InputText from '../InputText';
import DoctorDialog from '../DoctorDialog';

export default function LoginForms( { setNewTrainer, trainer, advancePage } ) {

    const [isDialogVisible, setDialogVisibility] = useState(false);

    function showDialog() {
        if(trainer.name !== '') {
            setDialogVisibility(true);
        }
    }

    function changeToInitial() {
        if(trainer.name !== '') {
            advancePage(true);
        } 
    }

    return(
        <section className='login-page'>
            <div className='welcome'>
                <img draggable={false} src='./images/pokemon-logo-4-1.png'/>
                <img draggable={false} src='./images/pikachuLogin.png'/>
            </div>
            <div className='login-data'>
                <div className='login-card'>
                    <h1>Boas vindas ao Pokemon!</h1>
                    <p>Insira seus dados: </p>
                    <InputText className='login-input' setNewTrainer={setNewTrainer} trainer={trainer} label='Nome:' />
                    <SwitchFemaleMale setNewTrainer={setNewTrainer} trainer={trainer} label='Gênero:'/>
                    <button onClick={(evento => showDialog())}>Iniciar Jornada!</button>
                </div>
            </div>
            {isDialogVisible ? (<DoctorDialog name={trainer.name} changeToInitial={changeToInitial}/>) : null}
        </section>
    );
};