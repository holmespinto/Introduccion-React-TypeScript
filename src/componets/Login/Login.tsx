import { useEffect, useReducer } from "react"

interface AuthState{
    validando: boolean;
    token: string | null;
    username: string;
    name: string;
}
const initialState: AuthState = {
    validando: true,
    token: '',
    username: '',
    name: ''   
}
type LoginPayload = {
    username: string;
    name: string;
}
type AuthAction=
|{type:'logout'}
|{type:'login',payload: LoginPayload}
 
const authReducer = (state:AuthState,action:AuthAction):AuthState =>{
switch (action.type) {
    case 'logout':
       return {
        validando:false,
        token:'',
        username: '',
        name:''
       } 
       case 'login':
       const {username,name}=action.payload
        return {
         validando:false,
         token:'ABC123',
         username,
         name,
        }       
    default:
        return state
    }
}
export const Login = () => {
    const [{validando,token,name}, dispatch] = useReducer(authReducer, initialState)

        useEffect(() => {
            setTimeout(() => {
                dispatch({type: 'logout'})
            }, 1500);
        }, [])

    const login = () => {
        dispatch({type: 'login', payload: {username:'hepinto', name:'Holmes'}})
    }
    const logout = () => {
        dispatch({type: 'logout'})
    }
if ( validando ){
    return (<>
        <h3>login</h3>
        <div className="alert alert-info">Validando...</div>
    </>)
}

  return (<>
    <h3>login</h3>
    {!token?<div className="alert alert-danger">No autenticado</div>:
    <div className="alert alert-success">Autenticado {name}</div>}
    
    {!token?<button className="btn btn-primary" onClick={login}>Login</button>
    :<button className="btn btn-danger" onClick={logout}>Logout</button>}
    </>)
}
