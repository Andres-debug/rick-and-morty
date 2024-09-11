import React, {useEffect,useState} from 'react';

interface Character{
    id:number,
    name:string,
    image:string
}

 export const CharacterList: React.FC = ()=>{

    const [characters,setCharacters]= useState<Character[]>([]);

    const [isLoading,setIsLoading]= useState<boolean>(true);

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
        .then(response=>response.json())
        .then(data=> {
            setCharacters(data.results)
            setIsLoading(false);
        }).catch(error=>{
            console.error('Error al cargar los personajes: ',error)
            setIsLoading(false)
        })
    },[])

    if(isLoading){
        return <p>Cargando personajes...</p>
    }

    return(
        <>
        <div>
            <h2>Personajes de Rick and Morty</h2>
            <ul>
                {
                    characters.map(character=>(
                        <li key={character.id}>
                            <img src={character.image} alt={character.name}/>
                            <p>{character.name}</p>
                        </li>
                    ))
                }
            </ul>
            </div>
        </>
    )
}