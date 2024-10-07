import React from 'react';
import CartWidget from './CartWidget'; // Importamos CartWidget

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <h2><a className="navbar-brand" href="#">Cybermart de RodanTech</a></h2> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">PC's Armados</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Laptops</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Piezas</a>
                        </li>
                    </ul>
                </div>
                <CartWidget /> 
            </div>
        </nav>
    );
}

export default NavBar;
