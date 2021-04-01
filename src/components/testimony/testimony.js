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
        imgListLinks: [
            {img: room, alt: 'room'},
            {img: kitchen, alt: 'kitchen'}
        ]
    }

    render() {

        const {imgListLinks} = this.state;
        const {tittleData} = this.props;

        const elem = tittleData.map((item) => {
            const {id, flowerTittle, tittle, classSmallFlower} = item;

            if (id === 'testimony') {
                return (
                    <section id="testimony"
                             key={id}>
                        <div className="section-tittle">
                            <div className="section-tittle-subtitle">
                                <SmallFlower flowerTittle={flowerTittle}
                                             classSmallFlower={classSmallFlower}/>
                            </div>
                            <div className="section-tittle-line testimony-line">
                                <h2>{tittle}</h2>
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
            return null;
        })

        return (
            <>
                {elem}
            </>
        )
    }
}
