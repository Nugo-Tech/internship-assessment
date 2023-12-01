import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCharacters } from '../features/characterSlice';
import CharacterCard from '../components/CharacterCard';

const CharacterList = () => {
    const characters = useSelector((state) => state.character.characterData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllCharacters());
    }, []);

    return (
        <div>
            <div className='header p-5 my-5 text-center text-slate-500 text-2xl font-bold'>
                <h1>Rick and Morty Characters</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 px-6 mx-6'>
                {characters.map((character) => (
                    <CharacterCard key={character.id} character={character}/>
                ))}
            </div>
        </div>
    );
};

export default CharacterList;