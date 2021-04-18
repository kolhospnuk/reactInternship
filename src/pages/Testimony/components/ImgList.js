import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../scss/imgList.css';
import * as shortid from 'shortid';

export default class ImgList extends Component {
  render() {
    const { imgListLinks } = this.props;

    const element = imgListLinks.map((item) => {
      const { img, alt } = item;

      return (
        <div
          key={shortid.generate()}
          className="testimony-list-img"
        >
          <img src={img} alt={alt} />
        </div>
      );
    });

    return (
      <>
        {element}
      </>
    );
  }
}

ImgList.propTypes = {
  imgListLinks: PropTypes.array.isRequired
};
