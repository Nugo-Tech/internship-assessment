import React from 'react'

const isFirstLetterVowel = (word) => {
  const firstLetter = Array.from(word)[0];
  return /[aeiouAEIOU]/.test(firstLetter);
}

const CharacterCard = ({character}) => {

  return (
    <div className='flex flex-col items-center'>
      <div className='card-content shadow-lg rounded-xl hover:shadow-2xl'>
        <div className='flex flex-col items-center'>
          <img 
            className='char-image rounded-t-xl'
            src={character.image} 
            alt={character.name}
          />
        </div>
        <div className='flex flex-col text-start ps-2 pb-5 pt-2'>
          <span>{character.name}</span>
          <span>
            {character.name}
            {isFirstLetterVowel(character.species) ? ' is an '+ character.species : ' is a ' + character.species }
            {character.origin.name === 'unknown' ? '' : ' from ' + character.origin.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;