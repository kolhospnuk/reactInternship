
import React, {Component} from 'react';
import './categories.css';
import './mediaCategories.css';

import desk from "../../img/categories/desk.png";
import chair from "../../img/categories/chair.png";
import kitchenware from "../../img/categories/kitchenware.png";
import shelf from "../../img/categories/shelf.png";
import electronics from "../../img/categories/electronics.png";

import SmallFlower from "../flowers/small";
import List from "./list/list";

export default class Categories extends Component {

    state = {
        flowerTittle: 'What we have',
        categoriesData: [
            {name: 'Desk', img: desk, btn: 'Shop now'},
            {name: 'Chair', img: chair, btn: 'Shop now'},
            {name: 'Kitchenware', img: kitchenware, btn: 'Shop now'},
            {name: 'Book Shelf', img: shelf, btn: 'Shop now'},
            {name: 'Electronics', img: electronics, btn: 'Shop now'}
        ]
    }

    render() {

        const {flowerTittle, categoriesData} = this.state;

        return (
            <div id="categories">
                <div className="section-tittle">
                    <div className="section-tittle-subtitle">
                        <SmallFlower flowerTittle={flowerTittle}/>
                    </div>
                    <div className="section-tittle-line categories-line">
                        <h2>CATEGORIES</h2>
                    </div>
                </div>
                <List categoriesData={categoriesData}/>
            </div>
        )
    }
}