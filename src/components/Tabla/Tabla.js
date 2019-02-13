import React, { Component } from 'react';
import  TableRow   from "./TableRow";

class Tabla extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const { items, respuestaSigfe } = this.props;

        let i = 1;

        return (
            <div>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Orden de compra</th>
                            <th scope="col">Ticket</th>
                            <th scope="col">Fecha Creaci&oacute;n</th>
                            <th scope="col">Fecha Respuesta</th>
                            <th scope="col">Folio</th>
                            <th scope="col">Mensaje validación</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            items && items.map( 
                                item => { 
                                    item.i = i++; 
                                        return  <TableRow 
                                                    key={ Math.random() * 1000000 }
                                                    item={item} >
                                                </TableRow>  
                                }
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Tabla;