
import React, {Component} from 'react';
import './slider.css';

export default class Slider extends Component {

    state = {
    }

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


// <div className="testimony-list-comment-slider">
//     <div className="testimony-list-comment-slider-previous">
//         <div className="arrow arrow-left">
//             <div/>
//         </div>
//         <span>Previous</span>
//     </div>
//     <div className="testimony-list-comment-slider-next">
//         <div className="arrow arrow-right">
//             <div/>
//         </div>
//         <span>Next</span>
//     </div>
// </div>