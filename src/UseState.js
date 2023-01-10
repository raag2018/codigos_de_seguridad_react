import React from "react";
const SECURITY_CODE = "paradigma";
function UseState({name}) {
  const [state, setState] = React.useState({
    val: '',
    error: false,
    loading: false
  });
  /*const [val, setVal] = React.useState("");
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);*/
  //console.log(value);
  React.useEffect(() => {
    console.group("useEffect");
    console.log("Empezando el efecto");
    if(!!state.loading){
      setTimeout(() => {
        console.group("Validacion");
        console.log("haciendo la validacion");
        console.log(state.val);
        if(state.val === SECURITY_CODE){
          setState({
            ...state,
            error: false,
            loading: false
          });
          console.log(state.val, SECURITY_CODE, state.error);
          //setError(true);
        }else{
          setState({
            ...state,
            error: true,
            loading: false
          });
          //setError(false);
        }
        //setLoading(false);
        console.log("restableciendo loading a false");
        console.log("terminado la validacion");
        console.groupEnd();
      },1500);
    }
    console.log("Terminando el efecto");
    console.groupEnd();
  },[state.loading]);
  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Por favor, escribe el codigo de seguridad.</p>
      {(state.error && !state.loading) && (
        <p>Error: el codigo es incorrecto</p>
      )}
      {state.loading && (
        <p>Cargando...</p>
      )}
      <input 
      value={state.val}
      onChange={(event) => {
        //setError(false);
        setState({...state, val: event.target.value})
        //setVal(event.target.value);
      }}
      placeholder="Codigo de Seguridad" />
      <button
        onClick={() => {
          setState({
            ...state,
            loading: true
          });
          //setError(false);
          //setLoading(true);
        }}
      >Comprobar</button>
    </div>
  );
}

export { UseState };
