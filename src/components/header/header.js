import React, {Component} from 'react';
import './header.css';
import './mediaHeader.css';

import SmallFlower from "../flowers/small";
import NavList from "./nav/navList/navList";
import Promo from "./nav/promo/promo";

export default class Header extends Component {

    render() {

        const {tittleData} = this.props;

        const elem = tittleData.map((item) => {
            const {id, flowerTittle, classSmallFlower} = item;

            if (id === 'header') {
                return (
                    <div id="header"
                    key={id}>
                        <div className="header-pink-bg"/>
                        <nav className="header-nav">
                            <div className="header-nav-woodies">
                                <SmallFlower flowerTittle={flowerTittle}
                                             classSmallFlower={classSmallFlower}/>
                            </div>
                            <NavList/>
                        </nav>
                        <Promo/>
                    </div>
                )
            }
            return null;
        })

        return (
            <>
                {elem}
            </>
        )
    }
}