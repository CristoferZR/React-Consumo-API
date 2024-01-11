import { useState } from "react";

export const useSearchGifs = () =>{

    const [valorInput,setValorInput] = useState('')

    const [gifs,setGifs] = useState([]);

    const [estaCargando,setEstacargando] = useState(false);

  const onChange = (event) =>{
    
    const valor = event.target.value
    setValorInput(valor)

  }


  const getGifs = async (query) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=OY4BEva9yBxED80tQ2JyG3ot3gj4xvcD&q=${query}`;
    setEstacargando(true)
    const response = await fetch(url);
    const data = await response.json();
    setEstacargando(false)
    return data.data;
  } 

  const onSubmit = async (e) =>{
    e.preventDefault()
    const gifs = await getGifs(valorInput)
    setGifs(gifs);

  }


    return{
        onSubmit,
        onChange,
        valorInput,
        gifs,
        estaCargando

        
    }
}