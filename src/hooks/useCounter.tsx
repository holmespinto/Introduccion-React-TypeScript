import { useState } from "react"

export const useCounter = (initnumber:number) => {
    const [valor, setValor] = useState(0)
    const acumulador=  (numero:number) => {
      setValor(valor+numero)
    }
    return {
        valor,
        acumulador,
    }
}
