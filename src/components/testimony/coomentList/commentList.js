import React, {Component} from 'react';
import star from "../../../icons/star.svg";
import person from "../../../img/testimony/person.png";
import Stars from "./stars";
import Slider from "./slider/slider";

export default class CommentList extends Component {

    state = {
        starsData: [
            {num: 5, logo: star, alt: star}
        ],
        personData: [
            {img: person, firstName: "Sandra Dewi", secondName: "Jakarta Selatan", alt: 'person'}
        ],
        sliderData: [
            {classStep: "testimony-list-comment-slider-previous", classArrow: 'arrow', step: 'Previous'},
            {classStep: "testimony-list-comment-slider-next", classArrow: 'arrow', step: 'Next'}
        ]
    }


    render() {

        const {starsData, sliderData, personData} = this.state;
        const {img, firstName, secondName, alt} = personData[0];

        return (
            <div className="testimony-list-comment">
                <div className="testimony-list-comment-txt">
                    <div className="testimony-list-comment-txt-stars">
                        <Stars starsData={starsData}/>
                    </div>
                    <span>
                        My experience with WOODIES is a complete success, <br/> from customed furniture,
                            range of product, modern <br/> design, purchasing experience, the delivery and <br/> newsletter.
                                Litterally everything is great. Thank you!
                    </span>
                    <div className="testimony-list-comment-txt-person">
                        <img src={img} alt={alt}/>
                        <span>{firstName} <br/>{secondName}</span>
                    </div>
                </div>
                <Slider sliderData={sliderData}/>
            </div>

        )
    }
}


