import './Title.css';

export default function Title({ text }) {
    return (
        <div className='title'>
            <h2>{text}</h2>
        </div>
    )
}