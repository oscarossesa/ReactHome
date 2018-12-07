import React, { Component } from 'react';

class TableRow extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { item } = this.props;
        return (
            <tr className={ item.Estado == 3 ? "alert alert-success" : item.Estado == 1 ? "alert alert-warning" :  item.Estado == -2 ? "alert alert-info" : ""  }    >
                <th scope="row"> { item.i }</th>
                <td>{ item.Ticket }</td>
                <td>{ item.FechaCreacion }</td>
                <td>{ item.FechaRespuesta }</td>
                <td>{ item.Estado }</td>
                <td>{ item.Folio }</td>
                <td width="10%">
                    { item.Estado == 2 && <p className="alert alert-danger" >{item.mensaje}</p> }
                </td>
            </tr>);
    }
}

export default TableRow;