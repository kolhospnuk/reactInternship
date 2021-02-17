
import React, {Component} from 'react';
import './slider.css';

export default class Slider extends Component {

    render() {

        const {sliderData} = this.props;

        const element = sliderData.map((item) => {
            const {classStep, classArrow, step} = item;

            return (
                <div className={classStep}>
                    <div className={classArrow}>
                        <div/>
                    </div>
                    <span>{step}</span>
                </div>
            )
        })

        return (
            <div className="testimony-list-comment-slider">
                {element}
            </div>
        )
    }
}