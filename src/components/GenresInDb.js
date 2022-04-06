import React, {useState, useEffect} from 'react';
import Genre from './Genre'
function GenresInDb() {
  let [generoLista, setGeneroLista] = useState([])

  useEffect(() => {
    fetch('/api/products')
    .then(response => {
        return response.json()
    })
    .then(data => {
        setGeneroLista(data.meta.countProductByGenre)
    })
}, []) //Etapa montaje
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Genres in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {
              generoLista.length > 0 &&
              generoLista.map((genero, id) => 
              {
                return <Genre {...genero} key={id} />
              })
            }
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;
