import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://github.com/Kblack4290" target="_blank">Keith Black</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                    <Link to="/About" className={window.location.pathname === "/#/About" ? "nav-link active" : "nav-link"}>
                                About
                            </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/Portfolio" className={window.location.pathname === "/#/Portfolio" ? "nav-link active" : "nav-link"}>
                                Portfolio
                            </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/Contact" className={window.location.pathname === "/#/Contact" ? "nav-link active" : "nav-link"}>
                                Contact
                            </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
