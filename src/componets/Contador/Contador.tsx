import { useState } from "react"

export const Contador = () => {
 const [valor, setValor] = useState(0)
const acumulador=  (numero:number) => {
  setValor(valor+numero)
}

  return (<>
    <h3>contador:<small>{valor}</small></h3>
    <button className='brn btn-primary' onClick={()=>acumulador(1)}>+1</button>&nbsp;
    <button className='brn btn-primary' onClick={()=>acumulador(-1)}>-1</button>
    </>)
}
