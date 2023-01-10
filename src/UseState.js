import React from "react";
const SECURITY_CODE = "paradigma";
function UseState({name}) {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  console.log(value);
  React.useEffect(() => {
    console.group("useEffect");
    console.log("Empezando el efecto");
    if(!!loading){
      setTimeout(() => {
        console.group("Validacion");
        console.log("haciendo la validacion");
        console.log(error);
        if(value !== SECURITY_CODE){
          setError(true);
        }else{
          setError(false);
        }
        setLoading(false);
        console.log("restableciendo loading a false");
        console.log("terminado la validacion");
        console.groupEnd();
      },1500);
    }
    console.log("Terminando el efecto");
    console.groupEnd();
  },[loading]);
  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Por favor, escribe el codigo de seguridad.</p>
      {(error && !loading) && (
        <p>Error: el codigo es incorrecto</p>
      )}
      {loading && (
        <p>Cargando...</p>
      )}
      <input 
      value={value}
      onChange={(event) => {
        //setError(false);
        setValue(event.target.value);
      }}
      placeholder="Codigo de Seguridad" />
      <button
        onClick={() => {
          setError(false);
          setLoading(true);}}
      >Comprobar</button>
    </div>
  );
}

export { UseState };
