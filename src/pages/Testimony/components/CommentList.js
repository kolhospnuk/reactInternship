import React, { Component } from 'react';
import '../scss/commentList.css';
import person from '../../../assets/img/testimony/person.png';
import Stars from './Stars';
import Slider from './Slider';

export default class CommentList extends Component {
  state = {
    personData: [
      {
        img: person,
        firstName: 'Sandra Dewi',
        secondName: 'Jakarta Selatan',
        alt: 'person'
      }
    ],
    sliderData: [
      {
        classStep: 'Testimony-list-comment-slider-previous',
        classArrow: 'arrow-left',
        step: 'Previous'
      },
      {
        classStep: 'Testimony-list-comment-slider-next',
        classArrow: 'arrow-right',
        step: 'Next'
      }
    ]
  }

  render() {
    const { sliderData, personData } = this.state;
    const {
      img,
      firstName,
      secondName,
      alt
    } = personData[0];

    return (
      <div className="testimony-list-comment">
        <div className="testimony-list-comment-txt">
          <div className="testimony-list-comment-txt-stars">
            <Stars />
          </div>
          <span>
            My experience with WOODIES is a complete success,
            <br />
            from customed furniture, range of product, modern
            <br />
            design, purchasing experience, the delivery and
            <br />
            newsletter. Litterally everything is great. Thank you!
          </span>
          <div className="testimony-list-comment-txt-person">
            <img src={img} alt={alt} />
            <span>
              {firstName}
              <br />
              {secondName}
            </span>
          </div>
        </div>
        <Slider sliderData={sliderData} />
      </div>
    );
  }
}
