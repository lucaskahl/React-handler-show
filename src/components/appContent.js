import React from 'react';
import BotaoSearch from './botao';

const AppContent = ({handleSearch}) => (
    <div className='app'>
        <BotaoSearch handleSearch={handleSearch}/>  
    </div>

);
export default AppContent;