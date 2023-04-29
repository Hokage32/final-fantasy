import React from 'react';
import './App.css';
import { useState,useEffect } from 'react';
import { Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './screens/Home';
import Characters from './screens/Characters';
import Monsters from './screens/Monsters';
import Games from './screens/Games';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/characters' element={<Characters/>}/>
      <Route path='/monsters' element={<Monsters/>}/>
      <Route path='/games' element={<Games/>}/>
      </Routes>


      
    </div>
  );
}

export default App;
