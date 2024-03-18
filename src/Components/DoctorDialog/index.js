import './DoctorDialog.css';

export default function DoctorDialog({ name, changeToInitial }) {
    return (
        <div className='doctor-dialog'>
            <div className='balloon'>
                <img draggable={false} src='./images/dialog-balloon.png'/>
                <div className='dialog-text'>
                    <p>Olá, {name}!<br/>Antes de iniciar a jornada,<br/> você deve escolher um pokémon inicial!</p>
                    <button onClick={evento => changeToInitial(true)}>Escolher</button>
                </div>
            </div>
            <img draggable={false} src='./images/professor_oak.png' />
        </div>
    );
}