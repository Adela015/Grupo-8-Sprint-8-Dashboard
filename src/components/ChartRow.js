import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>{props.artist}</td>
                    <td>{props.price}</td>
                    <td>{props.genero}</td>
                    <td>{props.formato}</td>
                </tr>
            )
    }
    
        

export default ChartRow;