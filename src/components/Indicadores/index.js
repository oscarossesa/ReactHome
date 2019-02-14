import React, { Component } from 'react'

class Indicadores extends Component {

  render() {

    let { indicadores } = this.props;

    console.log("render() Indicadores");

    return (
      <div>
        <h1>Indicadores</h1>
        {
          indicadores.map(indicador =>
            <div key={indicador.Estado}>
              <h3><span className="badge badge-secondary">{indicador.Cantidad}</span> {indicador.Descripcion}</h3>
            </div>
          )
        }
      </div>
    );
  }

}

export default Indicadores;