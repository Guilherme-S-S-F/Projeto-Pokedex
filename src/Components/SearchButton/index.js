import './SearchButton.css';

export default function SearchButton() {
    return (
        <div className='search-button'>
            <input type='text' placeholder='Pesquise um pokémon' />
            <button>Pesquisar</button>
        </div>
    );
}