import './InputText.css';

export default function InputText({ setNewTrainer, trainer, label }) {

    return (
        <div className='input-text'>
            <p>{label}</p>
            <input type='text' value={trainer.name} onChange={evento => setNewTrainer(evento.target.value, trainer.gender)} placeholder='Insira seu nome' required={true} />
        </div>
    )
}