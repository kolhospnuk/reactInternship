import React from 'react';
import PropTypes from 'prop-types';
import '../scss/slider.css';

const Slider = ({ sliderData }) => {
  const element = sliderData.map((item) => {
    const { classStep, classArrow, step } = item;

    return (
      <div
        key={classStep}
        className={classStep}
      >
        <div
          className={classArrow}
          key={classStep}
        >
          <div />
        </div>
        <span key={step}>{step}</span>
      </div>
    );
  });

  return (
    <div className="testimony-list-comment-slider">
      {element}
    </div>
  );
};

export default Slider;

Slider.propTypes = {
  sliderData: PropTypes.arrayOf(PropTypes.string).isRequired
};
