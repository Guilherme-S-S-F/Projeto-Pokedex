import './NotFound.css';
import Header from '../../Components/Header';

export default function NotFound() {
    return (
        <section className='notfound'>
            <Header buttonVisibility={true} />
            <div>
                <h1>Página não encontrada!</h1>
                <img draggable={false} src='./images/SleepingPikachu.png' alt='Pikachu dormindo' />
                <h2>Erro 404</h2>
            </div>
        </section>
    );
}