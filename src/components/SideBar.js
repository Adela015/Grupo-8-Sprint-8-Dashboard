import React from 'react';
import image from '../assets/images/ZeroLOGOwhite.png';

import ContentRowMovies from './ContentRowMovies';
import GenresInDb from './GenresInDb'
import LastMovieInDb from './LastMovieInDb';
import ContentWrapper from './ContentWrapper';
import Error404 from './Error404';
import {Link, Route, Switch} from 'react-router-dom'

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/" exact="true">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/contentwrapper" exact="true">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - ZERO</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/genresindb" exact="true">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/lastmovieindb" exact="true">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/contentrowmovies" exact="true">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
            {/*Sistema de Ruteo*/}
            
                <Switch>
                <Route path="/" exact={true} component={ContentWrapper}/>    
                <Route path="/contentrowmovies" component={ContentRowMovies}/>
                <Route path="/genresindb" component={GenresInDb}/>
                <Route path="/lastmovieindb" component={LastMovieInDb}/>
                <Route path="/contentwrapper" component={ContentWrapper}/>
                <Route component={Error404}/>
                </Switch>

        </React.Fragment>
    )
}
export default SideBar;