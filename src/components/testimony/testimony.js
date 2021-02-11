import React, {Component} from 'react';
import './testimony.css';
import './meadiaTestimony.css';

import room from "../../img/testimony/room.png";
import kitchen from "../../img/testimony/kitchen.png";
import person from "../../img/testimony/person.png";
import star from "../../icons/star.svg";

import SmallFlower from "../flowers/small";

export default class Testimony extends Component {

    state = {
        colorFlower: "small-flower-item",
        flowerTittle: 'What they say'
    }

    render() {

        const {colorFlower, flowerTittle} = this.state;

        return (
            <section id="testimony">
                <div className="section-tittle">
                    <div className="section-tittle-subtitle">
                        <SmallFlower colorFlower={colorFlower}
                                     flowerTittle={flowerTittle}/>
                    </div>
                    <div className="section-tittle-line testimony-line">
                        <h2>TESTIMONY</h2>
                    </div>
                </div>
                <div className="testimony-list">
                    <div className="testimony-list-img">
                        <img src={room} alt={"room"}/>
                    </div>
                    <div className="testimony-list-img">
                        <img src={kitchen} alt={"kitchen"}/>
                    </div>
                    <div className="testimony-list-comment">
                        <div className="testimony-list-comment-txt">
                            <div className="testimony-list-comment-txt-stars">
                                <img src={star} alt={"star"}/>
                                <img src={star} alt={"star"}/>
                                <img src={star} alt={"star"}/>
                                <img src={star} alt={"star"}/>
                                <img src={star} alt={"star"}/>
                            </div>
                            <span>
                            My experience with WOODIES is a complete success, <br/> from customed furniture,
                                range of product, modern <br/> design, purchasing experience, the delivery and <br/> newsletter.
                                    Litterally everything is great. Thank you!
                            </span>
                            <div className="testimony-list-comment-txt-person">
                                <img src={person} alt={"person"}/>
                                <span>Sandra Dewi <br/> Jakarta Selatan</span>
                            </div>
                        </div>
                        <div className="testimony-list-comment-slider">
                            <div className="testimony-list-comment-slider-previous">
                                <div className="arrow arrow-left">
                                    <div/>
                                </div>
                                <span>Previous</span>
                            </div>
                            <div className="testimony-list-comment-slider-next">
                                <div className="arrow arrow-right">
                                    <div/>
                                </div>
                                <span>Next</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimony-points">
                    <ul className="testimony-points-list">
                        <li/>
                        <li/>
                        <li/>
                        <li/>
                    </ul>
                </div>
            </section>
        )
    }
}
