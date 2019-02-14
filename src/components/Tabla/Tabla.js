import React, { Component } from 'react';
import Moment from 'react-moment';

class Tabla extends Component {

   render() {

      const filas = this.props.items.map((item) => {
         return (
            <tr
               key={Math.random() * 1000000}
               className={
                  item.Estado === 3 || item.Estado === 2 ?
                     "alert alert-success" :
                     item.Estado === 1 ?
                        "alert alert-warning" :
                        item.Estado === -2 ?
                           "alert alert-info" : ""}    >
               <td>
                  {/* {columnaOrigen} */}
                  { (item.RespuestaSigfeJson.detalles && 
                     item.RespuestaSigfeJson.detalles.compromiso[0].descripcion &&
                     item.RespuestaSigfeJson.detalles.compromiso[0].descripcion.includes("AJUSTE")) ? "AJUSTE": "COMPROMISO" }
               </td>
               <td>
                  {
                     item.RespuestaSigfeJson.detalles ?
                        item.RespuestaSigfeJson.detalles.compromiso[0].documentos.documento[0].numero :
                        'Sin OC'
                  }
               </td>
               <td>{item.Ticket}</td>
               <td>
                  <Moment format="DD-MM-YYYY HH:mm:ss">{item.FechaCreacion}</Moment>
               </td>
               <td>
                  <Moment format="DD-MM-YYYY HH:mm:ss">{item.FechaRespuesta}</Moment>
               </td>
               <td>{item.Folio}</td>
               <td width="10%">
                  {
                     item.Estado === 2 && <p className="alert alert-warning" >{item.mensaje}</p>
                  }
               </td>
            </tr>
         );
      });

      return (
         <div>
            <table className="table">
               <thead className="thead-light">
                  <tr>
                     <th scope="col">Operación</th>
                     <th scope="col">Orden de compra</th>
                     <th scope="col">Ticket</th>
                     <th scope="col">Fecha Creaci&oacute;n</th>
                     <th scope="col">Fecha Respuesta</th>
                     <th scope="col">Folio</th>
                     <th scope="col">Mensaje validación</th>
                  </tr>
               </thead>
               <tbody>
                  {filas}
               </tbody>
            </table>
         </div>
      );
   }
}

export default Tabla;