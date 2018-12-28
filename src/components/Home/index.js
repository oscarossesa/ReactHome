// Dependences
import React, { Component } from 'react';
import Tabla from "../Tabla/Tabla";

import config from "../../config";

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { items: [], seleccionado: "1" };
  }

  componentDidMount() {
    let url = config.api.hostname + "/" + config.api.url
    fetch(url )
      .then(response => response.json())
      .then(datos => {
        this.setState({ items: datos });
      });
  }

  render() {
    let { items, seleccionado } = this.state;
    if (seleccionado != "-1") {
      items = items.filter((x) => { return x.Estado == parseInt(this.state.seleccionado) })
    }

    return (
      <div className="Home">
        <h1>Envios Dipres  </h1>
        <hr />

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Estado</label>
          </div>
          <select className="custom-select" id="inputGroupSelect01" onClick={(e) => {
            this.setState({ seleccionado: e.target.value })
          }} >
            <option value="-1">Seleccionar...</option>
            <option value="1">En espera</option>
            <option value="2">Con Errores</option>
            <option value="3">Validado</option>
            <option value="-2">No Existentes</option>
          </select>
        </div>

        {items && <Tabla key={Math.random() * 1000000} items={items}></Tabla>}

        <hr />
      </div>
    );
  }
}

export default Home;