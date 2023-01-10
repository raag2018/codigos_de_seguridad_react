import React from "react";
import { Loading } from "./Loading";
const SECURITY_CODE = "paradigma";
class ClassState extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      error: false,
      loading: false,
    };
  }
  /*UNSAFE_componentWillMount(){
    console.log("componentWillMount");
  }

  componentDidMount(){
    console.log("componentDidMount");
  }*/
  componentDidUpdate(){
    console.log("update");
    if(!!this.state.loading){
      setTimeout(() => {
        console.group("Validacion");
        console.log("haciendo la validacion");
        if(SECURITY_CODE === this.state.value){
          this.setState({error: false, loading: false})
        }else{
          this.setState({error: true, loading: false})
        }
        this.setState({loading: false});
        console.log("restableciendo loading a false");
        console.log("terminado la validacion");
        console.groupEnd();
      },3000);
    }
  }
  render() {
    let name = this.props.name;
    return (
        <div>
          <h2>Eliminar {name}</h2>
          <p>Por favor, escribe el codigo de seguridad.</p>
          {
            (this.state.error && !this.state.loading) && (<p>Error: el codigo es incorrecto.</p>)
          }
          {
            this.state.loading && (<Loading/>)
          }
          <input 
            value={this.state.value}
            onChange={(event) =>{
              this.setState({value: event.target.value})
            }}
            placeholder="Codigo de Seguridad"/>
          <button
            onClick={() => this.setState({loading: true})}
          >Comprobar</button>
        </div>
    );
  };
}

export {ClassState};
