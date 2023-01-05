import React from "react";

class ClassState extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: false,
    };
  }
  render() {
    let name = this.props.name;
    return (
        <div>
          <h2>Eliminar {name}</h2>
          <p>Por favor, escribe el codigo de seguridad.</p>
          {
            this.state.error && (<p>Error: el codigo es incorrecto.</p>)
          }
          <input placeholder="Codigo de Seguridad"/>
          <button
            onClick={() => this.setState(prevState => ({error: !prevState.error}))}
          >Comprobar</button>
        </div>
    );
  };
}

export {ClassState};
