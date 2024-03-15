import './SearchButton.css';

export default function SearchButton() {
    return (
        <div className='search-button'>
            <input type='text' placeholder='Pesquise um pokémon' />
            <button><img src='./images/Icons/magnifying-glass-solid.svg'></img></button>
        </div>
    );
}