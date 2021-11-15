import React, {useState} from 'react'
import { Boton, Contenedor, Frase, Source } from './styles/App.style';

function App() {
  const [contador, setContador] = useState(0)
  const aumentarContador = () =>{
    setContador(contador + 1);
    if (contador === 4) {
      setContador(0);
    }
  }
    const frases = [
      {
        quote: "Frankly, my dear, I don't give a damn.",
        source: "Gone With The Wind - 1939"
      },
      {
        quote: "Here's looking at you, kid.",
        source: "Casablanca - 1942"
      },
      {
        quote: "You're gonna need a bigger boat.",
        source: "Jaws - 1975"
      },
      {
        quote: "May the force be with you.",
        source: "Star Wars - 1977"
      },
      {
        quote: "Toto, I've a feeling we're not in Kansas anymore.",
        source: "The Wizard of Oz - 1939"
      }
    ];
  return (
    <>
        <Contenedor>
              <Frase>{frases[contador].quote}</Frase>
              <Source>{frases[contador].source}</Source>
              <Boton onClick={() => aumentarContador()}>New quote</Boton>
        </Contenedor>      
    </>
  )
}

export default App
