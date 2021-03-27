
import React, {Component} from 'react';
import './imgList.css';
import * as shortid from "shortid";

export default class ImgList extends Component {


    render() {

        const {imgListLinks} = this.props;

        const element = imgListLinks.map((item) => {
            const {img, alt} = item;

            return (
                <div key={shortid.generate()}
                     className="testimony-list-img">
                    <img src={img} alt={alt}/>
                </div>
            )
        })

        return (
            <>
                {element}
            </>
        )
    }
}