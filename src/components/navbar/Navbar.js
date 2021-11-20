import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"
import Logo from "../../ressources/Logo_Blau.png"

export default function Nav({currentPage}) {

    useEffect(() => {
        if(currentPage === "ga") {
            document.getElementById("ga_link").classList.add("activeLink")
            document.getElementById("ca_link").classList.remove("activeLink")
            document.getElementById("gr_link").classList.remove("activeLink")
        } else if(currentPage === "ca") {
            document.getElementById("ca_link").classList.add("activeLink")
            document.getElementById("ga_link").classList.remove("activeLink")
            document.getElementById("gr_link").classList.remove("activeLink")
        } else if(currentPage === "gr") {
            document.getElementById("gr_link").classList.add("activeLink")
            document.getElementById("ca_link").classList.remove("activeLink")
            document.getElementById("ga_link").classList.remove("activeLink")
        }
    }, [currentPage])

    
    return (
            <div className="Container">
                <header className="navHeader">
                    <img src={Logo} width="70" height="70"/>
                    <nav className="navBar">
                        <ul className="navLinks">
                            <li><Link id="about_link" to="/about">About the project</Link></li>
                        </ul>                                
                    </nav>
                </header>
            </div>
    )
}