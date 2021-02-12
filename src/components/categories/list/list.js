
import React, {Component} from 'react'

import ListItem from "./listItem/listItem";

export default class List extends Component {

    render() {

        const {categoriesData} = this.props;

        const elements = categoriesData.map((item, i) => {
            return (
                <ListItem categoriesData={categoriesData}
                          i={i}/>
            )
        })

        return (
            <div className="categories-list">
                {elements}
            </div>
        )
    }
}


// <div className="categories-list-item">
//     <span>Chair</span>
//     <img className="categories-list-item-img" src={chair} alt={"chair"}/>
//     <button className="categories-list-item-btn">Shop Now</button>
// </div>
// <div className="categories-list-item">
//     <span>Kitchenware</span>
//     <img className="categories-list-item-img" src={kitchenware} alt={"kitchenware"}/>
//     <button className="categories-list-item-btn">Shop Now</button>
// </div>
// <div className="categories-list-item">
//     <span>Book Shelf</span>
//     <img className="categories-list-item-img" src={shelf} alt={"shelf"}/>
//     <button className="categories-list-item-btn">Shop Now</button>
// </div>
// <div className="categories-list-item">
//     <span>Electronics</span>
//     <img className="categories-list-item-img" src={electronics} alt={"electronics"}/>
//     <button className="categories-list-item-btn">Shop Now</button>
// </div>

