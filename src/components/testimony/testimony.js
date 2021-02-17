import React, {Component} from 'react';
import './testimony.css';
import './meadiaTestimony.css';

import room from "../../img/testimony/room.png";
import kitchen from "../../img/testimony/kitchen.png";

import SmallFlower from "../flowers/small";
import ImgList from "./imgList/imgList";
import CommentList from "./coomentList/commentList";
import Points from "./coomentList/points/points";

export default class Testimony extends Component {

    state = {
        flowerTittle: 'What they say',
        imgListLinks: [
            {img: room, alt: 'room'},
            {img: kitchen, alt: 'kitchen'}
        ]
    }

    render() {

        const {flowerTittle, imgListLinks} = this.state;

        return (
            <section id="testimony">
                <div className="section-tittle">
                    <div className="section-tittle-subtitle">
                        <SmallFlower flowerTittle={flowerTittle}/>
                    </div>
                    <div className="section-tittle-line testimony-line">
                        <h2>TESTIMONY</h2>
                    </div>
                </div>
                <div className="testimony-list">
                    <ImgList imgListLinks={imgListLinks}/>
                    <CommentList/>
                </div>
                <Points/>
            </section>
        )
    }
}
