// Dependences
import React, { Component } from 'react';
import Tabla from "../Tabla/Tabla";
import Indicadores from "../Indicadores"

import config from "../../config";

class Home extends Component {

   constructor() {
      super();

      console.log('constructor Home');

      this.state = {
         items: [],
         indicadores: [],
         respuestaSigfe: {},
         seleccionado: "0",
      };
   }

   componentWillMount() {
      console.log("componentWillMount() Home");

      // const log = [
      //    {
      //        "Ticket": "4624315303156010279",
      //        "FechaCreacion": "2019-02-12T17:28:58.373",
      //        "FechaRespuesta": "0001-01-01T00:00:00",
      //        "RespuestaSigfe": "{\"cabecera\":{\"ejercicio\":2019,\"periodo\":2,\"institucion\":{\"partida\":\"16\",\"capitulo\":\"28\",\"areaTransaccional\":\"009\"},\"proceso\":\"0201\",\"messageID\":\"796374151\"},\"detalles\":{\"compromiso\":[{\"id\":\"211\",\"titulo\":\"Orden de Compra 1627-400-CM19\",\"descripcion\":\"Orden de Compra 1627-400-CM19\",\"documentos\":{\"documento\":[{\"numero\":\"1627-400-CM19\",\"tipo\":\"1600\",\"fecha\":\"2019-02-12\",\"descripcion\":\"Orden de Compra 1627-400-CM19\",\"idDocumentoAjustado\":null,\"principales\":{\"principal\":[{\"id\":\"59077290-9\",\"transaccionesPrevias\":{\"transaccion\":[{\"folio\":152,\"tipo\":\"01\",\"idCombinacion\":\"5596632\",\"agrupacionesDeImputacionesACatalogos\":{\"agrupacion\":[{\"imputacionesACatalogosDeReagrupacion\":{\"catalogo\":[{\"catalogo\":\"iniciativaInversion\",\"elemento\":\"00\"}]},\"imputacionesAConceptosPresupuestarios\":{\"imputacion\":[{\"idConcepto\":\"2204005003\",\"montoFuturo\":0,\"saldo\":0,\"monto\":284158}]}}]}}]},\"cumplimientos\":{\"cumplimiento\":[{\"fecha\":\"2019-03-14\",\"monto\":284158}]}}]},\"imputacionesAGlosas\":null,\"camposVariables\":null,\"tipoDeCambio\":null,\"monto\":284158}]},\"etapa\":\"03\",\"informacionDeAjuste\":null}]}}",
      //        "Estado": 1,
      //        "Folio": null,
      //        "areaTransaccional": "1628009",
      //        "mensaje": null,
      //        "errores": null
      //    },
      //    {
      //        "Ticket": "1643300749228392537",
      //        "FechaCreacion": "2019-02-12T17:28:36.58",
      //        "FechaRespuesta": "0001-01-01T00:00:00",
      //        "RespuestaSigfe": "{\"cabecera\":{\"ejercicio\":2019,\"periodo\":1,\"institucion\":{\"partida\":\"16\",\"capitulo\":\"36\",\"areaTransaccional\":\"002\"},\"proceso\":\"0201\",\"messageID\":\"109551529\"},\"detalles\":{\"compromiso\":[{\"id\":\"211\",\"titulo\":\"Orden de Compra 1382-314-SE19\",\"descripcion\":\"Orden de Compra 1382-314-SE19\",\"documentos\":{\"documento\":[{\"numero\":\"1382-314-SE19\",\"tipo\":\"1600\",\"fecha\":\"2019-02-12\",\"descripcion\":\"Orden de Compra 1382-314-SE19\",\"idDocumentoAjustado\":null,\"principales\":{\"principal\":[{\"id\":\"76418690-7\",\"transaccionesPrevias\":{\"transaccion\":[{\"folio\":3,\"tipo\":\"01\",\"idCombinacion\":\"5665576\",\"agrupacionesDeImputacionesACatalogos\":{\"agrupacion\":[{\"imputacionesACatalogosDeReagrupacion\":{\"catalogo\":[{\"catalogo\":\"iniciativaInversion\",\"elemento\":\"00\"}]},\"imputacionesAConceptosPresupuestarios\":{\"imputacion\":[{\"idConcepto\":\"2208001\",\"montoFuturo\":0,\"saldo\":0,\"monto\":22371776}]}}]}}]},\"cumplimientos\":{\"cumplimiento\":[{\"fecha\":\"2019-03-14\",\"monto\":22371776}]}}]},\"imputacionesAGlosas\":null,\"camposVariables\":null,\"tipoDeCambio\":null,\"monto\":22371776}]},\"etapa\":\"03\",\"informacionDeAjuste\":null}]}}",
      //        "Estado": 1,
      //        "Folio": null,
      //        "areaTransaccional": "1636002",
      //        "mensaje": null,
      //        "errores": null
      //    }
      // ];

      // const indicadores = [
      //    {
      //       "Estado": -2,
      //       "Cantidad": 54,
      //       "Descripcion": "(-2) - Error!! -- folio generado en Sigfe y no registrado en MP."
      //    },
      //    {
      //       "Estado": 1,
      //       "Cantidad": 96,
      //       "Descripcion": "(1) - En espera de valdación en Sigfe"
      //    },
      //    {
      //       "Estado": 2,
      //       "Cantidad": 345,
      //       "Descripcion": "(2) - Con errores de negocio."
      //    },
      //    {
      //       "Estado": 3,
      //       "Cantidad": 905,
      //       "Descripcion": "(3) - Validado, con folio generado."
      //    },
      //    {
      //       "Estado": 5,
      //       "Cantidad": 54,
      //       "Descripcion": null
      //    }
      // ]

      // this.setState({
      //    indicadores: indicadores
      // });

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