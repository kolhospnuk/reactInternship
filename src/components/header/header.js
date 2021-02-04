
import React from 'react';
import './header.css';
import './mediaHeader.css';

import table from "../../img/header/table.png";

const Header = () => {

    return (
        <div id="header">
            <div className="header-pink-bg"/>
            <nav className="header-nav">
                <div className="header-nav-woodies">
                    <div className="small-flower orange-flower-header">
                        <div className="small-flower-item orange"/>
                        <div className="small-flower-item orange"/>
                        <div className="small-flower-item orange"/>
                        <div className="small-flower-item orange"/>
                    </div>
                    <a href={"#header"}>WOODIES</a>
                </div>
                <ul className="header-nav-menu">
                    <li className="header-nav-menu-item"><a href={"#header"}>Home</a></li>
                    <li className="header-nav-menu-item"><a href={"#about"}>About Us</a></li>
                    <li className="header-nav-menu-item"><a href={"#custom"}>How it works</a></li>
                    <li className="header-nav-menu-item"><a href={"#categories"}>Categories</a></li>
                    <li className="header-nav-menu-item"><a href={"#testimony"}>Testimony</a></li>
                    <li className="header-nav-menu-item">
                        <button className="header-nav-menu-btn orange-btn">SIGN UP</button>
                    </li>
                </ul>
            </nav>
            <section className="header-promo">
                <div className="header-promo-txt">
                    <h3 className="header-promo-txt-furniture">
                        Are you looking for <span>wooden <br/> furniture</span> for your place?
                    </h3>
                    <h2 className="header-promo-txt-place">
                        This is the <br/> Right Place
                    </h2>
                    <button className="header-promo-txt-btn orange-btn">Explore Furniture</button>
                </div>
                <div className="header-promo-img">
                    <div className="big-flower">
                        <div className="big-flower-item"/>
                        <div className="big-flower-item"/>
                        <div className="big-flower-item"/>
                        <div className="big-flower-item"/>
                    </div>
                    <div className="header-promo-img-table">
                        <img src={table} alt={table}/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header;