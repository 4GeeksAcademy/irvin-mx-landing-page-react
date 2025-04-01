import React from "react";

const Navbar = () => {
    return (
        <div className="container-fluid bg-secondary">
            <nav className="navbar navbar-expand-lg bg-secondary container-fluid">
                <div className="container-fluid row">
                    <a className="navbar-brand text-white col-9" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler col-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse col-3 " id="navbarNavAltMarkup">
                        <div className="navbar-nav text-danger">
                            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                            <a className="nav-link text-white-50" href="#">About</a>
                            <a className="nav-link text-white-50" href="#">Services</a>
                            <a className="nav-link text-white-50" >Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar