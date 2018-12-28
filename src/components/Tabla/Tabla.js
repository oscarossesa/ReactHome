import React, { Component } from 'react';

import  TableRow   from "./TableRow";

class Tabla extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { items } = this.props;
        let i = 1;
        return (
            <div>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Ticket</th>
                            <th scope="col">Fecha Creaci&oacute;n</th>
                            <th scope="col">Fecha Respuesta</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Folio</th>
                            <th scope="col">Mensje</th>
                        </tr>
                    </thead>
                    <tbody>
                    { items && items.map( item => { item.i = i++; return  <TableRow item={item} key={ Math.random() * 1000000 } ></TableRow>  }   ) }
                        

                    </tbody>
                </table>
            </div>
        );
    }
}

export default Tabla;