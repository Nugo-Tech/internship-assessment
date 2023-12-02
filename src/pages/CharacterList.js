import React from 'react';
import { useSelector } from 'react-redux';
import CharacterCard from '../components/CharacterCard';
import Pagination from '../components/Pagination';

const CharacterList = () => {
    const characters = useSelector((state) => state.character.characterData);

    return (
        <div>
            <div className='header p-5 mb-5 mt-3 text-center text-slate-500 md:text-3xl text-2xl font-bold bg-slate-300'>
                <h1>Rick and Morty Characters</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 px-6 mx-6'>
                {characters.map((character) => (
                    <CharacterCard key={character.id} character={character}/>
                ))}
            </div>
            <div className='py-5'>
                <Pagination />
            </div>
        </div>
    );
};

export default CharacterList;