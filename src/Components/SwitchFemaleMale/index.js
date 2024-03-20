import './SwitchFemaleMale.css';

export default function SwitchFemaleMale({ setNewTrainer, trainer, label }) {

    function atGenderChange(gender) {
        gender = !trainer.gender;
        setNewTrainer(trainer.name, gender);
    }

    return (
        <div className='gender-choice'>
            <p>{label}</p>
            <div className='switch-malefemale'>
                <p>Mulher</p>
                <label className="switch">
                    <input type="checkbox" value={trainer.gender} onChange={evento => atGenderChange(trainer.gender)} />
                    <span className="slider round"></span>
                </label>
                <p>Homem</p>
            </div>
        </div>
    );
}