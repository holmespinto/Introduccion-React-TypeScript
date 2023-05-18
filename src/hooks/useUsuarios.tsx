import { useEffect, useRef, useState } from "react"
import { reqResApi } from "../api/reqRes"
import { ReqResListado, Usuario } from "../interfaces/reqRes"


export const useUsuarios = (initnumber: number) => {

  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const pageRef = useRef(initnumber)

  useEffect(() => {
    cargarUsuarios()
  }, [])

  const cargarUsuarios = async () => {
    const resp = await reqResApi.get<ReqResListado>('/users', {
      params: {
        page: pageRef.current
      }
    })

    if (resp.data.data.length > 0) {
      setUsuarios(resp.data.data)
    } else {
      pageRef.current--;
      alert('No existe más registros')
    }
  }
  const pageNext = () => {
    pageRef.current++;
    cargarUsuarios()
  }
  const pageLast = () => {
    if(pageRef.current>1){
      pageRef.current--;
      cargarUsuarios()
    }

  }
  return {
    usuarios,
    pageNext,
    pageLast,
  }
}