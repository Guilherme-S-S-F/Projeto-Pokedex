import './TrainerProfile.css';

export default function TrainerProfile({ trainer }) {
    return(
        <div className='trainer'>
            <h2>Trainer</h2>
            <img draggable={false} src={`./images/${trainer.gender ? "AshMaleTrainer" : 'LikoFemaleTrainer'}.png`}/>
            <h1>Victor Madrid</h1>
        </div>
    )
}