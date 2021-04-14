
import React, {Component} from 'react'

import ListItem from "./ListItem";
import * as shortid from "shortid";

export default class List extends Component {

    render() {

        const {categoriesData} = this.props;

        const elements = categoriesData.map((item, i) => {
            return (
                <ListItem key={shortid.generate()}
                          categoriesData={categoriesData}
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

