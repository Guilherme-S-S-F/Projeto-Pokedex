import './TrainerProfile.css';

export default function TrainerProfile({ trainer }) {
    return (
        <div className='trainer'>
            <h2>Trainer</h2>
            <img draggable={false} src={`./images/${trainer.gender ? "AshMaleTrainer" : 'LikoFemaleTrainer'}.png`} alt='Imagem do seu personagem' />
            <h1>{trainer.name}</h1>
        </div>
    )
}