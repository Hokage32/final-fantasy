import React from 'react'

const CharacterCard = ({characters}) => {
  return (
    <div className='card'>
        <img src={characters.pictures.url} alt="" />
        <h3>{characters.name} <h4>Age: {characters.age}</h4></h3> 
        <h5>Origin: {characters.origin}</h5>
        <h6>{characters.description}</h6>





    </div>
  )
}

export default CharacterCard