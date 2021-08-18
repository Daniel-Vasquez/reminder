import React from "react";

class Formulario extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  ID = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  dayCount = (f1, f2) => {
    const day = f2 - f1;

    return day;
  };

  render() {
    const dateToday = new Date();
    console.log(dateToday);

    return (
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>Title</label>
            <input type="text" name="title" onChange={this.props.onChange} />
          </div>

          <div>
            <label>Fecha</label>
            <input type="date" name="fecha" onChange={this.props.onChange} />
          </div>

          <div>
            <label>Create at</label>
            <input type="text" name="createAt" onChange={this.props.onChange} />
          </div>

          <div>
            <label>Updated at</label>
            <input
              type="text"
              name="updatedAt"
              onChange={this.props.onChange}
            />
          </div>

          <p>{this.dayCount(this.props.fecha, dateToday)}</p>

          <button type="submit">Guardar</button>
        </form>
      </div>
    );
  }
}

export default Formulario;
