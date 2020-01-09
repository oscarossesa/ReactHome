// Dependences
import React, { Component } from 'react';
import Tabla from "../Tabla/Tabla";
import Indicadores from "../Indicadores"

// import { Button, ButtonToolbar } from 'react-bootstrap';
// import MyVerticallyCenteredModal from '../Tabla/MyVerticallyCenteredModal'

import config from "../../config";

class Home extends Component {

   constructor() {
      super();
      this.state = {
         items: [],
         indicadores: [],
         respuestaSigfe: {},
         seleccionado: "0",
         modalShow: false,
      };
   }

   componentWillMount() {
      let url = config.api.hostname + "/" + config.api.url;
      let urlIndicadores = config.api.hostname + "/" + config.api.url + "/getindicadores";

      fetch(urlIndicadores)
      .then(response => response.json())
      .then(response => {

         this.setState({
            indicadores: response
         });

      });

      fetch(url)
         .then(response => response.json())
         .then(datos => {

            console.log(datos);

            this.setState({
               items: datos
            });

         });
   }

   componentDidMount() {
      console.log("componentDidMount() Home");
   }

   render() {

      console.log('render() Home component');

      let { items, seleccionado, indicadores } = this.state;
      let modalClose = () => this.setState({ modalShow: false });


      //manipulo la respuesta del servicio para manejar el nodo RespuestaSigfe como JSON, ya que es un string.
      items.forEach(element => {
         element.RespuestaSigfeJson = JSON.parse(element.RespuestaSigfe);
      });

      if (seleccionado !== "0") {
         items = items.filter((item) => {
            return item.Estado === parseInt(this.state.seleccionado)
         })
      }

      return (
         <div className="Home">
            <h1>Validaciones presupuestarias</h1>
            <hr />
            <Indicadores indicadores={indicadores}></Indicadores>
            <div className="input-group mb-3">
               <div className="input-group-prepend">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">Fitrar por estado de la validación presupuestaria</label>
               </div>
               <select
                  className="custom-select"
                  id="inputGroupSelect01"
                  onClick={(e) => {
                     this.setState({
                        seleccionado: e.target.value
                     })
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