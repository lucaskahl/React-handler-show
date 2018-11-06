import React from 'react';

const BotaoSearch = ({handleSearch}) => (
    <div>
        <input 
        className='git__search-input'
        type='search'
        placeholder='Digite o nome do usuario'
        onKeyUp={handleSearch}
        />
    </div>
);

export default BotaoSearch;