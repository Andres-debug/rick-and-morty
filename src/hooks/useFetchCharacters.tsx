import {useState,useEffect} from 'react';

export const useFetchCharacters =<T,>(url:string)=>{

    const [data,setData]= useState<T | null>(null);
    const [loading,setLoading] = useState(true);
    const [error,setError]= useState<string | null>(null);

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await fetch(url);
                if(!res.ok){
                    throw new Error('Error al obtener los datos');
                }
                const data = await res.json();
                setData(data)
            }catch(err:any){
                setError(err.message)
            }finally{
                setLoading(false)
            }
        }
        fetchData();
    },[url])

return {data,loading,error}


}