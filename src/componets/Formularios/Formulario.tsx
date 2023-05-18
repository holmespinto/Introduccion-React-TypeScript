import { useForm } from "../../hooks/useForm"

export const Formulario = () => {
const {formulario,Email,Password,onChange} =useForm({
    Email:'holmespinto@gmail.com',
    Password:'12345'
})
  return (<>
    <h3>Formulario</h3>
    <div className="mb-3">
    <label className="form-label">Email address</label>
        <input type="text" className="form-control" 
        placeholder="Email"
        value={Email}
        onChange={({target}) =>onChange(target.value,'Email') }
        />
    </div>
    <div className="mb-3">
    <label className="form-label">Usuario</label>
        <input type="text" className="form-control" 
        placeholder="Password"
        value={Password}
        onChange={({target}) =>onChange(target.value,'Password') }
        />
    </div>
    <code>
        <pre>
            {JSON.stringify(formulario,null,2)}
        </pre>
    </code>
    </>)
}
