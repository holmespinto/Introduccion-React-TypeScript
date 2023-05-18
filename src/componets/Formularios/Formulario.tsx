import { useState } from "react"

export const Formulario = () => {
    const [formulario, setFormulario] = useState({
        Email:'holmespinto@gmail.com',
        Password:'12345'
    })

    const onChange=(value:string,campo:string) => {
        setFormulario({
            ...formulario,
            [campo]:value
        })
    }

  return (<>
    <h3>Formulario</h3>
    <div className="mb-3">
    <label className="form-label">Email address</label>
        <input type="text" className="form-control" 
        placeholder="Email"
        value={formulario.Email}
        onChange={({target}) =>onChange(target.value,'Email') }
        />
    </div>
    <div className="mb-3">
    <label className="form-label">Usuario</label>
        <input type="text" className="form-control" 
        placeholder="Password"
        value={formulario.Password}
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
