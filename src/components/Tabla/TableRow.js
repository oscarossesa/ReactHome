import React, { Component } from 'react';
import Moment from 'react-moment'; 

class TableRow extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { item } = this.props;

        return (
            <tr className={ 
                    item.Estado == 3 || item.Estado == 2 ? 
                        "alert alert-success" : 
                            item.Estado == 1 ? 
                                "alert alert-warning" :  
                                item.Estado == -2 ? 
                                    "alert alert-info" : ""  }    >
                <td>{ item.Ticket }</td>
                <td>
                    <Moment format="DD-MM-YYYY HH:mm:ss">{ item.FechaCreacion }</Moment>
                </td>
                <td>
                    <Moment format="DD-MM-YYYY HH:mm:ss">{ item.FechaRespuesta }</Moment>
                </td>
                <td>{ item.Folio }</td>
                <td width="10%">
                    { 
                        item.Estado == 2 && <p className="alert alert-warning" >{item.mensaje}</p> 
                    }
                </td>
            </tr>);
    }
}

export default TableRow;