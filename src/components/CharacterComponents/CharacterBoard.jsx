import React from 'react'
import CharacterCard from './CharacterCard'

const CharacterBoard = ({characters}) => {

const char = characters.map((c) => {
    return <CharacterCard characters={c}/>
})


  return (
    <div className='card-container'>

        {char}
    </div>


    
  )
}

export default CharacterBoard