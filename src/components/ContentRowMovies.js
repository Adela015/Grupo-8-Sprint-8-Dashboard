import React, {useState, useEffect} from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */




function ContentRowMovies(){
    let [countProducts, setCountProducts] = useState(0)
    let [countUsers, setCountUsers] = useState(0)
    let [countGenre, setCountGenre] = useState(0)

    //
    useEffect(() => {
        fetch('https://grupo-8-zero-sprint-8.herokuapp.com/api/products')
        .then(response => {
            return response.json()
        })
        .then(data => {
            setCountProducts(data.meta.count)
            setCountUsers(data.meta.countUsuariosTotal)
            setCountGenre(data.meta.countOfGenres)
        })
    }, []) //Etapa montaje
 

    let moviesInDB = {
        title: 'Total de productos',
        color: 'primary', 
        cuantity: countProducts,
        icon: 'fa-clipboard-list'
    }
    
    /* <!-- Total awards --> */
    
    let totalAwards = {
        title:' Total de usuarios', 
        color:'success', 
        cuantity: countUsers,
        icon:'fa-award'
    }
    
    /* <!-- Actors quantity --> */
    
    let actorsQuantity = {
        title:'Total generos' ,
        color:'warning',
        cuantity: countGenre,
        icon:'fa-user-check'
    }
    let cartProps = [moviesInDB, totalAwards, actorsQuantity];


    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;