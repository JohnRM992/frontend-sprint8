import React from 'react';

function Navbar() {
    return (
        <nav>
        <div className="container">
            <div className="nav-caja2">
                <a href="/"><i className="fa fa-bars"></i></a>
            </div>
    
            <img className="imgLogo" src="/images/logo-InvictusHardStore-1.png" alt="Logo"/>
    
            <div className="nav-caja">
                <ul>
                    <li>
                        <a className="nav-lista" href="http://localhost:3300/">Home</a>
                    </li>
                    <li>
                        <a className="nav-lista" href="http://localhost:3300/products/create">Crear Producto</a>
                    </li>
                    <li>
                      
                        <a className="nav-lista" href="/products/prodList">Todos los Productos</a>
                    </li>
                </ul>
            </div>
    
            <div className="nav-icono">
    

            </div>
        </div>
    </nav>
    );
}

export default Navbar;


