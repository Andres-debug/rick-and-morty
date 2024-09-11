import React, {useState,useEffect} from 'react'

interface Episode{
    id:number,
    name:string,
    episode:string,
    air_date:string,
}

interface CharacterEpisodesProps {
    characterId: number,
}

export const CharacterEpisodes: React.FC<CharacterEpisodesProps> = ({characterId})=>{
    const [episodes,setEpisodes]= useState<Episode[]>([])
    const [isLoading,setIsLoading]= useState<boolean>(true);

    useEffect(()=>{
        const fetchEpisodes = async ()=>{
            try{
                setIsLoading(true);//https://rickandmortyapi.com/api/character/2
                const characterResponse =await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
                const characterData = await characterResponse.json();

                const espisodesUrls: string[]= characterData.episode;
                const episodesPromises = espisodesUrls.map(url=>fetch(url).then(
                    res=>res.json()))
                    const episodesData = await Promise.all(episodesPromises)

                    setEpisodes(episodesData);
                    setIsLoading(false);

        }catch(error){
            console.error('Error al cargar los episodios: ',error)
            setIsLoading(false);
        }
        }
        fetchEpisodes();
    },[characterId])

    if(isLoading){
        return <p>Cargando personajes...</p>
    }
    
    return(
        <>
        <div className='character-episodes'>
        <h2>
            Episodios por personaje
        </h2>
        <ul>
            {
                episodes.map(episode=>(
                    <li key={episode.id}>
                        <h3>{episode.name}</h3>
                        <p>Episodio:{episode.episode}</p>
                        <p>Fecha de Emision:{episode.air_date}</p>
                    </li>
                ))
            }
        </ul>
        </div>
        </>
    );
}