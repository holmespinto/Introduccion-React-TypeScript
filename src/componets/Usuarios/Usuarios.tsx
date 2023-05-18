/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useRef, useState } from "react"
import { reqResApi } from "../../api/reqRes"
import { ReqResListado, Usuario } from "../../interfaces/reqRes"

export const Usuarios = () => {
const renderItems = (usuario:Usuario)=> {
 return (<>
     <tr key={usuario.id}>
      <th scope="row">{usuario.id}</th>
      <td><img src={usuario.avatar} style={{width:40,borderRadius:100}}/></td>
      <td>{usuario.first_name}</td>
      <td>{usuario.last_name}</td>
    </tr>
 </>)

}
 
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
   const pageRef = useRef(0)
  
  useEffect(() => {
      cargarUsuarios()   
    }, [])

  const cargarUsuarios= async() =>{
     const resp = await reqResApi.get<ReqResListado>('/users',{
      params: {
        page:pageRef.current
     }})
     
      if(resp.data.data.length>0){
        pageRef.current ++;
        console.log(pageRef.current)
        setUsuarios(resp.data.data)
      }else{
        alert('No existe más registros')  
      }
  }

  return (<>
    <h3>Usuarios</h3>
    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Avatar</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
    </tr>
  </thead>
  <tbody>
    {usuarios?.map(renderItems)}
  </tbody>
</table>
    <button className="page-link"  onClick={() => cargarUsuarios()}>Siguiente</button>
  </>)
}
