import { useState } from "react"
import {SimpleContainer} from "./components/simpleContainer/SimpleContainer"


const App = () => {

  const [tempo, setTempo] = useState(10);
  const [valorDigitado, setValorDigitado] = useState('');
  const [resultado, setResultado] = useState(0);

  return (
    <>
     <SimpleContainer valorDigitado={valorDigitado} setValorDigitado={setValorDigitado} resultado={resultado} setResultado={setResultado} tempo={tempo} setTempo={setTempo}/>
    </>
  )
}

export default App;