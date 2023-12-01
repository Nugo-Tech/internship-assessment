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
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8'>
            {characters.map((character) => (
                <CharacterCard key={character.id} character={character}/>
            ))}
        </div>
    );
};

export default CharacterList;