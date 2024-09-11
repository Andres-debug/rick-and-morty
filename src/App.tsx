import { useState } from 'react'
import './App.css'
import { CharacterFilter } from './components/CharacterFilter'
import { CharacterList } from './components/CharacterList'
import { CharacterEpisodes } from './components/CharacterEpisodes';

function App() {
  
  const [characterId,setCharacterId]=useState<number>(1);

  return (
    <>
    <div>
      <header>
        <h1>Rick and Morty</h1>
        <div>
          <label>Selecciona un ID de personaje (1-671)</label>
          <input type='number' min='1' max='671' value={characterId}
          onChange={(e)=>setCharacterId(Number(e.target.value))}/>
        </div>
        <CharacterEpisodes characterId={characterId}/>
      </header>

    </div>
    
    </>
  )
}

export default App
