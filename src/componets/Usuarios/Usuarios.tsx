/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import { useUsuarios } from "../../hooks/useUsuarios"
import { Usuario } from "../../interfaces/reqRes"

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
export const Usuarios = () => {

  const {usuarios,pageLast,pageNext} =useUsuarios(0)
  return (<>
    <h3>Usuarios </h3>
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
    <button className="page-link"  onClick={() => pageLast()}>Anterior</button>&nbsp; <button className="page-link"  onClick={() => pageNext()}>Siguiente</button>
  </>)
}
