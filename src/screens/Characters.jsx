import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import CharacterBoard from '../components/CharacterComponents/CharacterBoard'

const Characters = () => {

const [characters, setCharacters] = useState([])

useEffect(() => {
    axios
    .get('https://www.moogleapi.com/api/v1/characters')
    .then((res) => {
        console.log(res.data)
        setCharacters(res.data)
    })
    
}, [])









  return (
    <div>
    <header>Characters</header>

    <CharacterBoard characters={characters}/>
    </div>
  )
}

export default Characters