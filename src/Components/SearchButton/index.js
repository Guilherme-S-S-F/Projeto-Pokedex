import './SearchButton.css';
import { useState } from 'react';

export default function SearchButton({ buttonClick }) {
    let [value, setValue] = useState('');

    const onSearch = () => {
        buttonClick(value);
    }

    const onSearchChange = (evt) => {
        setValue(evt.target.value);
    }

    return (
        <div className='search-button'>
            <input type='text' value={value} onChange={evt => onSearchChange(evt)} placeholder='Pesquise um pokémon' />
            <button onClick={onSearch}><img src='./images/Icons/magnifying-glass-solid.svg' alt='Lupa' /></button>
        </div>
    );
}