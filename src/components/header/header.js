
import React, {Component} from 'react';
import './header.css';
import './mediaHeader.css';

import table from "../../img/header/table.png";
import SmallFlower from "../flowers/small";
import BigFlower from "../flowers/big";
import NavList from "./navList/navList";

export default class Header extends Component {

    state = {
        colorFlower: "small-flower-item orange",
        flowerTittle: 'WOODIES',
        bigFlower: "big-flower"
    }

    render() {

        const {colorFlower, flowerTittle, bigFlower} = this.state;

        return (
            <div id="header">
                <div className="header-pink-bg"/>
                <nav className="header-nav">
                    <div className="header-nav-woodies">
                        <SmallFlower colorFlower={colorFlower}
                                     flowerTittle={flowerTittle}/>
                    </div>
                   <NavList/>
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
                        <BigFlower bigFlower={bigFlower}/>
                        <div className="header-promo-img-table">
                            <img src={table} alt={table}/>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}