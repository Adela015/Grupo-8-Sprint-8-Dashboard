import React, {useState, useEffect} from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';

function LastMovieInDb(){
    let [ultimoProducto, setUltimoProducto] = useState({})
    let [verDetalleEstado, setVerDetalleEstado] = useState(false)
    
    useEffect(() => {
        fetch('https://grupo-8-zero-sprint-8.herokuapp.com/api/products')
        .then(response => {
            return response.json()
        })
        .then(data => {
            setUltimoProducto(data.data.list[data.data.list.length-1])
        })
    }, []) //Etapa montaje
 
    const verDetalle = (e) => {
        e.preventDefault()
        setVerDetalleEstado(!verDetalleEstado)
    }

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last movie in Data Base</h5>
                </div>
                {
                    verDetalleEstado===false &&
                    <div className="card-body">
                    <div className="text-center">
                        {
                            Object.keys(ultimoProducto).length > 0 &&
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={'https://grupo-8-zero-sprint-8.herokuapp.com/images/albumes/'+ultimoProducto.imagen} alt=" Star Wars - Mandalorian "/>}
                    </div>
                    <p>Titulo: {ultimoProducto.name}</p>
                    <p>Precio: {ultimoProducto.price}</p>
                    <p>Género: {ultimoProducto.genero}</p>

                    <a className="btn btn-danger" onClick={verDetalle} target="_blank" rel="nofollow" href="/">Ver más</a>
                </div>}
                {
                    verDetalleEstado===true &&
                    <div className="card-body">
                    <div className="text-center">
                        {
                            Object.keys(ultimoProducto).length > 0 &&
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={'https://grupo-8-zero-sprint-8.herokuapp.com/images/albumes/'+ultimoProducto.imagen} alt=" Star Wars - Mandalorian "/>}
                    </div>
                    
                    <p>Titulo: {ultimoProducto.name}</p>
                    <p>Descripcion: {ultimoProducto.description}</p>
                    <p>Precio: {ultimoProducto.price}</p>
                    <p>Género: {ultimoProducto.genero}</p>
                    
                   
                    <p>Artista: {ultimoProducto.artist}</p>
                    <p>Formato: {ultimoProducto.formato}</p>

                    <a className="btn btn-danger" onClick={verDetalle} target="_blank" rel="nofollow" href="/">Ver menos</a>
                </div>
                }
            </div>
        </div>
    )
}

export default LastMovieInDb;
