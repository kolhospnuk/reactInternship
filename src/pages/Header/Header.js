import React, {Component} from 'react';
import './scss/header.css';
import './scss/mediaHeader.css';

import SmallFlower from "../../components/Flowers/Small";
import NavList from "./components/NavList";
import Promo from "./components/Promo";

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