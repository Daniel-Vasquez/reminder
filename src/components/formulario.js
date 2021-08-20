import React from "react";

class Formulario extends React.Component {
  render() {
    const { id, title, fecha, handleSubmit } = this.props;

    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit({ id, title, fecha });
          }}
        >
          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.props.onChange}
            />
          </div>

          <div>
            <label>Fecha</label>
            <input
              type="date"
              name="fecha"
              value={fecha}
              onChange={this.props.onChange}
            />
          </div>

          <button type="submit">Guardar</button>
        </form>
      </div>
    );
  }
}

export default Formulario;
