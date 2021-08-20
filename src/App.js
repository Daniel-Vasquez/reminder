import React from "react";
import Formulario from "./components/formulario";
import randomId from "./utils/randomId";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        id: "",
        title: "",
        fecha: "",
      },
      notas: [{ id: "123", title: "Salir", fecha: "2021-12-27" }],
    };
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = ({ id, title, fecha }) => {
    const newNotas = [...this.state.notas, { id: randomId(), title, fecha }];

    this.setState({
      notas: newNotas,
      form: {
        id: "",
        title: "",
        fecha: "",
      },
    });
  };

  handleDelete = (id) => {
    const newNotas = this.state.notas.filter((nota) => nota.id !== id);

    this.setState({ notas: newNotas });
  };

  render() {
    const { form, notas } = this.state;

    console.log(this.state);
    return (
      <div>
        <h2>Notas</h2>
        <Formulario
          onChange={this.handleChange}
          {...form}
          handleSubmit={this.handleSubmit}
        />
        {notas.map((nota) => {
          return (
            <div
              key={nota.id}
              style={{
                border: "1px solid red",
                width: "160px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div>
                <p>{nota.title}</p>
                <p>{nota.fecha}</p>
              </div>
              <div>
                <button onClick={() => this.handleDelete(nota.id)}>
                  Borar
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
