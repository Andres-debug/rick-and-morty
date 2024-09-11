import React, {useState,useEffect} from 'react';

interface Character {
    id:number,
    name:string,
    status:string,
    image:string
}

export const CharacterFilter: React.FC = ()=>{
    
    const [characters,setCharacters]= useState<Character[]>([]);

    const [isLoading,setIsLoading]= useState<boolean>(true);

    const [status,setStatus]=useState<string>('');

    useEffect(()=>{
        let url = 'https://rickandmortyapi.com/api/character';
        if(status){
            url+=`?status=${status}`
        }

        setIsLoading(true);
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            setCharacters(data.results);
            setIsLoading(false);
        })
        .catch(error=>{
            console.error('Error al cargar los personajes:',error)
            setIsLoading(false);
        })
    },[status])

    if(isLoading){
        return <p>Cargando personajes ...</p>
    }


    return(
        <>
        <div>
            <h2>Filter por Estado de Vida</h2>
            <div>
                <label>Seleccione un estado: </label>
                <select onChange={(e)=>setStatus(e.target.value)}>
                    <option value="">Todos</option>
                    <option value="alive">Vivo</option>
                    <option value="dead">Muerto</option>
                    <option value="unknown">Desconocido</option>
                </select>
            </div>
            <ul>
                {
                    characters.map(character=>(
                        <li key={character.id}>
                            <img src={character.image} alt={character.name}/>
                            <p>{character.name}{(character.status)}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
        </>
    )
}