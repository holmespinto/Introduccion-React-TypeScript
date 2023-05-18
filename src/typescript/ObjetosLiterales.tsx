
interface Persona {
    nombre:string;
    apellidos:string;
    edad:number;
    direccion:Direccion;
}
interface Direccion {
    pais:string;
    casaNo:string;
}

export const ObjetosLiterales = () => {
    const personas:Persona={
        nombre:'Holmes',
        apellidos:'Pinto Avila',
        edad:55,
        direccion:{
            pais:'Colombia',
            casaNo:'Transversal 22 No.19a-48'
        }


    }
    return (<>
      <h1>Objetos Literales</h1>
      <code>
            <pre>
                {JSON.stringify(personas,null,2)}
            </pre>
      </code>
      </>)
  }