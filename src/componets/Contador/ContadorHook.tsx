
import { useCounter } from "../../hooks/useCounter"

export const ContadorHook = () => {
 const {valor,acumulador} =useCounter(10)

  return (<>
    <h3>Contador Hook:<small>{valor}</small></h3>
    <button className='brn btn-primary' onClick={()=>acumulador(1)}>+1</button>&nbsp;
    <button className='brn btn-primary' onClick={()=>acumulador(-1)}>-1</button>
    </>)
}
