
import React, {Component} from 'react';
import './header.css';
import './mediaHeader.css';

import SmallFlower from "../flowers/small";
import NavList from "./nav/navList/navList";
import Promo from "./nav/promo/promo";

export default class Header extends Component {

    state = {
        orangeFlower: true,
        flowerTittle: 'WOODIES'
    }

    render() {

        const {orangeFlower, flowerTittle} = this.state;

        return (
            <div id="header">
                <div className="header-pink-bg"/>
                <nav className="header-nav">
                    <div className="header-nav-woodies">
                        <SmallFlower orangeFlower={orangeFlower}
                                     flowerTittle={flowerTittle}/>
                    </div>
                   <NavList/>
                </nav>
                <Promo/>
            </div>
        )
    }
}