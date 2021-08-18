import React from "react";
import Formulario from "./components/formulario";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      title: "",
      fecha: "",
      preferencias: "",
      createAt: "",
      updatedAt: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h2>Notas</h2>
        <Formulario onChange={this.handleChange} fecha={this.state.fecha} />
      </div>
    );
  }
}

export default App;
