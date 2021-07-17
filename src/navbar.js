import React from 'react';
import logo from './logo.png'

const Navbar = () => {
    return (
        <nav class="navbar fixed-top navbar-dark bg-dark">
            <div class="container-fluid">
                <img className="navbar-brand" src={logo} style={{width:"10rem"}} />
            </div>
        </nav>
    )
}

export default Navbar

