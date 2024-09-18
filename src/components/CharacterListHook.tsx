import React from 'react';
import {Link} from 'react-router-dom';
import { useFetchCharacters } from '../hooks/useFetchCharacters';
import { Spinner } from './Spinner';

type Character = {
    id: number;
    name: string;
    image: string;
   
  };

  type APIResponse ={
    results: Character[]
  }

export const CharacterListHook = () =>{

const {data, loading, error} = useFetchCharacters<APIResponse>('https://rickandmortyapi.com/api/character');

if(loading) return <Spinner/>
if(error) return <p>{error}</p>

return(
    <>
    <div>
        <h1>Personajes de Rick and Morty</h1>
        <ul>
            {data?.results.map((character)=>(
                <li key={character.id}>
                    <img src={character.image} alt={character.name} width={100}/>
                    <Link to={`/character/${character.id}`}>Ir al Personaje</Link>
                </li>
            ))}
        </ul>
    </div>
    </>
)

}