import React, {useState, useEffect} from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        Title: 'Billy Elliot ',
        Length: '123',
        Rating: '5',
        Categories: ['Drama','Comedia'],
        Awards: 2
    },
    {
        Title: 'Alicia en el país de las maravillas',
        Length: '142',
        Rating: '4.8',
        Categories: ['Drama','Acción','Comedia'],
        Awards: 3
    },
    
]


function Chart (){
    let [productosEstado, setProductosEstado] = useState([])

    useEffect(() => {
        fetch('https://grupo-8-zero-sprint-8.herokuapp.com/api/products')
        .then(response => {
            return response.json()
        })
        .then(data => {
            setProductosEstado(data.data.list)
        })
    }, []) //Etapa montaje

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Álbum</th>
                                <th>Artista</th>
                                <th>Precio</th>
                                <th>Género</th>
                                <th>Formato</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>ID</th>
                                <th>Álbum</th>
                                <th>Artista</th>
                                <th>Precio</th>
                                <th>Género</th>
                                <th>Formato</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            productosEstado.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;