import React from "react";
import Formulario from "./components/formulario";
import randomId from "./utils/randomId";
import backArrow from "./images/hacia-atras.png";
import home from "./images/home.png";
import options from "./images/options.png";
import basura from "./images/basura.png";
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
      notas: [],
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

    return (
      <React.Fragment>
        <div className="containerApp">
          <div className="containerApp-container">
            <h2>Recordatorio</h2>
            <Formulario
              onChange={this.handleChange}
              {...form}
              handleSubmit={this.handleSubmit}
            />
            <div className="containerNotas">
              {notas.map((nota) => {
                return (
                  <div className="containerNotas-nota" key={nota.id}>
                    <div className="containerNotas-nota__details">
                      <p>{nota.title}</p>
                      <p>{nota.fecha}</p>
                    </div>
                    <div className="containerNotas-nota__button">
                      <button
                        className="containerNotas-botton"
                        onClick={() => this.handleDelete(nota.id)}
                      >
                        <img src={basura} alt="Borrar nota" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="containerApp-options">
            <img className="" src={backArrow} alt="Regresar"></img>
            <img className="" src={home} alt="Regresar"></img>
            <img className="" src={options} alt="Regresar"></img>
          </div>
        </div>
        <div className="containerApp-shade"></div>
      </React.Fragment>
    );
  }
}

export default App;
