import React from "react";
import "./styles/formulario.css";

class Formulario extends React.Component {
  render() {
    const { id, title, fecha, handleSubmit } = this.props;

    return (
      <React.Fragment>
        <form
          className="containerForm"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit({ id, title, fecha });
          }}
        >
          <div className="containerForm-title">
            <label className="containerForm-title__text">
              Título del evento
            </label>
            <input
              className="containerForm-title__input"
              type="text"
              name="title"
              value={title}
              onChange={this.props.onChange}
            />
          </div>

          <div className="containerForm-date">
            <label className="containerForm-date__text">Fecha</label>
            <input
              className="containerForm-date__input"
              type="date"
              name="fecha"
              value={fecha}
              onChange={this.props.onChange}
            />
          </div>

          <button
            className="containerForm-button"
            type="submit"
            disabled={!Boolean(title && fecha)}
          >
            Guardar
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Formulario;
