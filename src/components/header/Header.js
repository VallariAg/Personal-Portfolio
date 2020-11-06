import React, { Fragment, useState } from "react";
import bars from './bars.svg';
import logo from "./va.jpg";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { Dialog } from "@material-ui/core"
import closeButton from "./close.svg";

function NavButtons() {
    return (
        <Fragment>
            <NavLink className="nav-button" activeClassName="selectedButton" to="/blog">
                BLOG
            </NavLink>
            <NavLink className="nav-button" activeClassName="selectedButton" to="/art">
                ART
            </NavLink>
            <NavLink className="nav-button" activeClassName="selectedButton" to="/timeline">
                TIMELINE
            </NavLink>
            <NavLink className="nav-button" activeClassName="selectedButton" to="/about">
                ABOUT
            </NavLink>
        </Fragment>
    )
}

function Header() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        // <div className="">
        <div className="header">
            <Link className="logo" to="/">
                <img style={{ height: "30px" }} src={logo} />
                {/* Vallari Agrawal */}
            </Link>
            <nav className="nav">
                {NavButtons()}
            </nav>
            <nav className="nav-menu">
                <img src={bars} onClick={handleClickOpen} />
                <Dialog fullScreen open={open} onClose={handleClose} className="menu-dialog">
                    <nav className="nav-menu-options">
                        {NavButtons()}
                        <img src={closeButton} style={{ height: "20%" }} className="nav-button" onClick={handleClose} />
                    </nav>
                </Dialog>
            </nav>
            {/* </div> */}
        </div>);
}


export default Header;
