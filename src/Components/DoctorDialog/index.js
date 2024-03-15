import './DoctorDialog.css';

export default function DoctorDialog({ changeToInitial }) {
    return (
        <div className='doctor-dialog'>
            <div className='balloon'>
                <img src='./images/dialog-balloon.png'/>
                <div className='dialog-text'>
                    <p>Antes de iniciar a jornada,<br/> você deve escolher um pokemon inicial!</p>
                    <button onClick={evento => changeToInitial(true)}>Escolher</button>
                </div>
            </div>
            <img src='./images/professor_oak.png' />
        </div>
    );
}