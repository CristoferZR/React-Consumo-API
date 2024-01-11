import { Buscador } from "./Buscador";
import { GridGifs } from "./GridGifs";
import { useSearchGifs } from "./useSearchGifs";

function App() {

  const {valorInput,onChange,onSubmit,gifs,estaCargando} = useSearchGifs()
  

  return (
    <div className='App'>
      
      <Buscador 
      valorInput={valorInput}
      onChange={onChange}
      onSubmit={onSubmit}
      />

      {
        estaCargando ? (<div className="spinner-content"><div className="spinner"></div></div>) : (<GridGifs gifs = {gifs}/>)
      }
      
      
    </div>
  )
}

export default App
