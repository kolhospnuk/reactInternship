
import React, {Component} from 'react';
import './about.css';
import './mediaAbout.css';

import plates from "../../img/custom/plates.png";
import spoons from "../../img/custom/spoons.png";

import SmallFlower from "../flowers/small";
import BigFlower from "../flowers/big";

export default class About extends Component {

    state = {
        colorFlower: "small-flower-item",
        flowerTittle: "Who we are",
        bigFlower: "big-flower big-flower-about"
    }

    render() {

        const {colorFlower, flowerTittle, bigFlower} = this.state;


        return (
            <div id="about">
                <div className="section-tittle">
                    <div className="section-tittle-subtitle">
                        <SmallFlower colorFlower={colorFlower}
                                     flowerTittle={flowerTittle}/>
                    </div>
                    <div className="section-tittle-line">
                        <h2>ABOUT US</h2>
                    </div>
                </div>
                <div className="dishes">
                    <div className="dishes-img">
                        <div className="dishes-img-bg"/>
                        <img src={plates} alt={"plates"}/>
                    </div>
                    <div className="dishes-txt">
                        <h3>WOODIES <span>is the</span> home of <br/> modern wooden furniture</h3>
                        <h4>the answer to your need for furniture <br/> with shapes, sizes and colors.</h4>
                    </div>
                </div>
                <div className="customized">
                    <h3>Customized furniture <span>made just for you <br/> </span></h3>
                    <h4>Get it easy to adjust furniture to the shape and size of your <br/> dwelling or business.
                    </h4>
                    <div className="customized-img">
                        <img src={spoons} alt={"spoons"}/>
                    </div>
                </div>
                <BigFlower bigFlower={bigFlower}/>
            </div>
        )
    }
}