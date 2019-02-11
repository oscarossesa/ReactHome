// Dependences
import React, { Component } from 'react';
import Tabla from "../Tabla/Tabla";

import config from "../../config";

class Home extends Component {

   constructor(props) {
      super(props);

      console.log('constructor, set state vacio.');

      this.state = {
         items: [],
         seleccionado: "0"
      };
   }

   componentDidMount() {
      console.log("componentDidMount, set state con datos.");

      let url = config.api.hostname + "/" + config.api.url

      fetch(url)
         .then(response => response.json())
         .then(datos => {
            this.setState({ items: datos });
         });
   }

   render() {

      console.log('render()');

      let { items, seleccionado } = this.state;

      if (seleccionado != "0") {
         items = items.filter((item) => {
            return item.Estado == parseInt(this.state.seleccionado)
         })
      }

      return (
         <div className="Home">
            <h1>Validaciones presupuestarias</h1>
            <hr />
            <div className="input-group mb-3">
               <div className="input-group-prepend">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">Fitrar por estado de la validación presupuestaria</label>
               </div>
               <select
                  className="custom-select"
                  id="inputGroupSelect01"
                  onClick={(e) => {
                     this.setState({ seleccionado: e.target.value })
                  }} >
                  <option value="0">Seleccionar...</option>
                  <option value="1">(1) - En espera de valdación en Sigfe.</option>
                  <option value="2">(2) - Con errores de negocio.</option>
                  <option value="3">(3) - Validado, con folio generado.</option>
                  <option value="-2">(-2) - Error!! -- folio generado en Sigfe y no registrado en MP.</option>
               </select>
            </div>
            <div>
               {
                  items &&
                  <Tabla
                     key={Math.random() * 1000000}
                     items={items}>
                  </Tabla>
               }
            </div>
            <hr />
         </div>
      );
   }
}

export default Home;