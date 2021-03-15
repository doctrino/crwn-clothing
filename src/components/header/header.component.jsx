import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg'
import "./header.style.css";

const Header = () => (
    <div className="header">
        <Link classname="logo-container" to="/">
            <Logo classname="logo" />
        </Link>
        <div className="options">
            <Link classname="option" to="/shop" >SHOP</Link>
            <Link classname="option" to="/contact" >CONTACT</Link>
        </div>
    </div>
)

export default Header;
