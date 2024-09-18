import React from "react";
import { useParams, Link } from "react-router-dom";
import { useFetchCharacters } from "../hooks/useFetchCharacters";
import { Spinner } from "./Spinner";

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  location: {
    name: string;
  };
};

export const CharacterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: character,
    loading,
    error,
  } = useFetchCharacters<Character>(`https://rickandmortyapi.com/api/character/${id}`);

  if (loading) return <Spinner />;
  if (error) return <p>{error}</p>;

  return(
    <>
    <div>
        {character ? (
            <div> 
                <h1>{character.name}</h1>
                <img src={character.image} alt={character.name} width={200}/>
                <p><strong>Status: {character.status}</strong></p>
                <p><strong>Specie: {character.species}</strong></p>
                <p><strong>Gender: {character.gender}</strong></p>
                <p><strong>Actual Location: {character.location.name}</strong></p>
            </div>
        ):(
            <h1>No se encontraron detalles de este personaje</h1>
        )}
        <Link to="/">Vovler a la lista</Link>
    </div>
    </>
  )
};
