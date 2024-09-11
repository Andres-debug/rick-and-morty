import React, {useEffect,useState} from 'react';

interface Character{
    id:number,
    name:string,
    image:string
}

interface Info {
    next: string | null,
    prev: string | null,
}

 export const CharacterList: React.FC = ()=>{

    const [characters,setCharacters]= useState<Character[]>([]);
    const [isLoading,setIsLoading]= useState<boolean>(true);
    const [info,setInfo]= useState<Info>({next:null,prev:null});
    const [page,setPage]=useState<number>(1)

    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then(response=>response.json())
        .then(data=> {
            setCharacters(data.results)
            setInfo(data.info)
            setIsLoading(false);
        }).catch(error=>{
            console.error('Error al cargar los personajes: ',error)
            setIsLoading(false)
        })
    },[page])

    const handlePrev = () =>{
        if (info.prev){
            setPage(page-1);
        }
    }

    const handleNext = () =>{
        if(info.next){
            setPage(page+1)
        }
    }

    if(isLoading){
        return <p>Cargando personajes...</p>
    }

    return(
        <>
        <div className='character-pagination'>
            <h2>Personajes de Rick and Morty - Page {page}</h2>
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
            <button onClick={handlePrev} disabled={!info.prev}>Anterior</button>
            <button onClick={handleNext} disabled={!info.next}>Siguiente</button>
        </>
    )
}