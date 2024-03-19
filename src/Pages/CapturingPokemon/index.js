import Header from '../../Components/Header';
import MiniGame from '../../Components/MiniGame';
import './CapturedPokemon.css';

export default function CapturingPokemon() {
    return (
        <section>
            <Header buttonVisibility={true}/>
            <MiniGame />
        </section>
    );
}