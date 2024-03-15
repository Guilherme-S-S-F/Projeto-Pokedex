import { useState } from 'react';
import LoginForms from '../../Components/LoginForms';
import './Login.css';

export default function Login( { setNewTrainer, trainer } ) {

    return (
        <LoginForms setNewTrainer={setNewTrainer} trainer={trainer} />
    )
};