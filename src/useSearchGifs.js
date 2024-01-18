import { useState } from "react";
import axios from "axios";

export const useSearchGifs = () =>{

    const [valorInput,setValorInput] = useState('')

    const [gifs,setGifs] = useState([]);

    const [estaCargando,setEstacargando] = useState(false);

    const [error,setError] = useState("");

  const onChange = (event) =>{
    
    const valor = event.target.value
    setValorInput(valor)

  }

  /* Peticion HTTP a una API con fetch
  const getGifs = async (query) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=OY4BEva9yBxED80tQ2JyG3ot3gj4xvcD&q=${query}`;
    setEstacargando(true)
    const response = await fetch(url);
    const data = await response.json();
    setEstacargando(false)
    return data.data;
  } */

  const getGifs = async (query) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=OY4BEva9yBxED80tQ2JyG3ot3gj4xvcD&q=${query}`;

    try{
      setEstacargando(true);
      const response = await axios.get(url);
      setGifs(response.data.data);

    }catch(error){
      setError(error);

    }finally{
      setEstacargando(false);
    }
    
  }
  
  const onSubmit = async (e) =>{
    e.preventDefault()
    await getGifs(valorInput)
  }


    return{
        onSubmit,
        onChange,
        valorInput,
        gifs,
        estaCargando,
        error

        
    }
}