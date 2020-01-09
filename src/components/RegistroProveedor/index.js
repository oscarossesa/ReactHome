import React, { useState, useEffect } from 'react'
import axios from 'axios'

const RegistroProveedor = () => {

   const [usuariosClaveUnica, setUsuariosClaveUnica] = useState([])

   useEffect(() => {
      const fetchData = async () => {
         const result = await axios('http://localhost:3001/api/registro')
         const { UsuariosTemporales } = result.data[0]
         setUsuariosClaveUnica(UsuariosTemporales)
      }
      fetchData()
   }, [])

   return (
      <div className="container">
         <p className="h3 mt-3">Dashboard Registro de Proveedores</p>
         <hr></hr>
         <div className="row">
            <div className="col-12">
               <div className="card">

                  {/* <img src="..." className="card-img-top" alt="..." /> */}
                  <div className="card-body">
                     <h5 className="card-title">Usuarios ClaveÚnica</h5>
                     <p className="card-text">Usuarios que han ingresado a Mercado Público realizado login, a través de, la opción de ClaveÚnica.</p>
                     {/* <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Cargando...</span>
                     </div> */}
                     <div className="text-center">
                        <span className="h4">{usuariosClaveUnica}</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default RegistroProveedor