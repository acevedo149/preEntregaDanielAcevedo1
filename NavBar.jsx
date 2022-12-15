import React from "react";
import CartWidgts from "./cartwidgets";

const NavBar = () =>{
    return(
        <div className="conatiner">
            <div className="row">
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/logo"><img src={"images/logo.webp"} alt="logo tool" width={100}/></a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/rachet">rachet</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/wrenc">wrench</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/screwdrivers">screwdrivers</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/sockets">sockets</a>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </nav>
                </div>
        
                <div className="col-md-6 d-flex justify-content-end align-items-center">
                <CartWidgts />
                </div>
            </div>
        </div>
    )
}

export default NavBar;