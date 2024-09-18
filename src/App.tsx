import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { CharacterFilter } from './components/CharacterFilter'
import { CharacterList } from './components/CharacterList'
import { CharacterEpisodes } from './components/CharacterEpisodes';
import { CharacterListHook } from './components/CharacterListHook';
import { CharacterDetail } from './components/CharacterDetail'

function App() {
  
  return (
    <>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<CharacterListHook/>}/>
          <Route path="/character/:id" element={<CharacterDetail/>}/>
        </Routes>
      </Router>

      

    </div>
    
    </>
  )
}

export default App
