import React from "react";
import Formulario from "./components/formulario";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        id: "",
        title: "",
        fecha: "",
        createAt: "",
        updatedAt: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = ({ id, title, fecha }) => {
    console.log("Guardando", { id, title, fecha });
  };

  render() {
    const { form } = this.state;

    console.log(this.state);
    return (
      <div>
        <h2>Notas</h2>
        <Formulario
          onChange={this.handleChange}
          {...form}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
