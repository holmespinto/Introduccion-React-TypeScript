/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react"
import { reqResApi } from "../../api/reqRes"
import { ReqResListado, Usuario } from "../../interfaces/reqRes"
import Pagination from "./Pagination"

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
    useEffect(() => {
        reqResApi.get<ReqResListado>('/users').then(resp=>{
          return setUsuarios(resp.data.data)

        }).catch(console.log)    
    }, [])
    //console.log(usuarios)
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
<Pagination usuarios={usuarios} tasksPerPage={0} totalTasks={0} currentPage={0}  />
    </>)
}
