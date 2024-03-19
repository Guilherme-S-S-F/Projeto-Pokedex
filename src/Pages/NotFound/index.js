import Header from '../../Components/Header';
import './NotFound.css';

export default function NotFound() {
    return (
        <section className='notfound'>
            <Header buttonVisibility={true}/>
            <div>
                <h1>Página não encontrada!</h1>
                <img draggable={false} src='./images/SleepingPikachu.png'/>
                <h2>Erro 404</h2>
            </div>
        </section>
    );
}