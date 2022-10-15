import React from "react";


const Navbar = () => {
    return (
        <div className="menu">
            <div className="logo">

                <a href="" >
                    REACT
                </a>


            </div>
            <div className="nav-menu">
                <ul>
                    <li>
                        <a href="#home">HOME</a>
                    </li>
                    <li>
                        <a href="#about" >ABOUT</a>

                    </li>
                    <li>
                        <a href="#work">SYNTAX</a>
                    </li>
                    <li>
                        <a href="#clients">CONTACT</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;