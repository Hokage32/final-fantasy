import React from 'react'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <header>
        <h2>R2D2 BABY</h2>
        <nav>
            <Link to={'/'}>
            <button className='btn'>Home</button>
            </Link>

            <Link to={'/characters'}>
            <button className='btn'>Characters</button>
            </Link>

            <Link to={'/monsters'}>
            <button className='btn'>Monsters</button>
            </Link>

            <Link to={'/games'}>
            <button className='btn'>Games</button>
            </Link>

        </nav>


    </header>
  )
}

export default Header