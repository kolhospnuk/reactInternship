import React from 'react';
import styles from '../scss/CommentList.module.css';
import person from '../../../assets/img/testimony/person.png';
// import Stars from './Stars';
import Slider from './Slider';

const CommentList = () => {
  const {
    testimonyListComment, testimonyListCommentTxt, testimonyListCommentTxtPerson
  } = styles;
  const personData = [
    {
      img: person,
      firstName: 'Sandra Dewi',
      secondName: 'Jakarta Selatan',
      alt: 'person'
    }
  ];
  const sliderData = [
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
  ];
  const {
    img,
    firstName,
    secondName,
    alt
  } = personData[0];

  return (
    <div className={testimonyListComment}>
      <div className={testimonyListCommentTxt}>
        <div className={testimonyListCommentTxtPerson}>
          {/* <Stars /> */}
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
        <div className={testimonyListCommentTxtPerson}>
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
};

export default CommentList;
