import Header from '../../Components/Header';
import './NotFound.css';

export default function NotFound() {
    return (
        <section className='notfound'>
            <Header />
            <div>
                <h1>Página não encontrada!</h1>
                <img src='./images/SleepingPikachu.png'/>
                <h2>Erro 404</h2>
            </div>
        </section>
    );
}