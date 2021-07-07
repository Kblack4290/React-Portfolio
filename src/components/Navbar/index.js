import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Resume from '../../assets/images/KBlack_DEV_Resume.pdf'
import Dlicon from '../../assets/images/Download-icon.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href='https://github.com/Kblack4290' target="_blank" rel="noreferrer">Keith Black</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/About" className={window.location.pathname === "/#/About" ? "nav-link active" : "nav-link"} style={{ color: "rgba(0,0,0,.9)" }}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Portfolio" className={window.location.pathname === "/#/Portfolio" ? "nav-link active" : "nav-link"} style={{ color: "rgba(0,0,0,.9)" }}>
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Contact" className={window.location.pathname === "/#/Contact" ? "nav-link active" : "nav-link"} style={{ color: "rgba(0,0,0,.9)" }}>
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href={Resume} target="_blank" rel="noreferrer" style={{ color: "rgba(0,0,0,.9)" }}> Resume
                            <span><img src={Dlicon} alt="download icon" /></span></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
