
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

