
import React from 'react';
import './categories.css';
import './mediaCategories.css';

import desk from "../../img/categories/desk.png";
import chair from "../../img/categories/chair.png";
import kitchenware from "../../img/categories/kitchenware.png";
import shelf from "../../img/categories/shelf.png";
import electronics from "../../img/categories/electronics.png";

const Categories = () => {

    return (
        <div id="categories">
            <div className="section-tittle">
                <div className="section-tittle-subtitle">
                    <div className="small-flower">
                        <div className="small-flower-item"/>
                        <div className="small-flower-item"/>
                        <div className="small-flower-item"/>
                        <div className="small-flower-item"/>
                    </div>
                    <span>What we have</span>
                </div>
                <div className="section-tittle-line categories-line">
                    <h2>CATEGORIES</h2>
                </div>
            </div>
            <div className="categories-list">
                <div className="categories-list-item">
                    <span>Desk</span>
                    <img className="categories-list-item-img" src={desk} alt={"desk"}/>
                        <button className="categories-list-item-btn">Shop Now</button>
                </div>
                <div className="categories-list-item">
                    <span>Chair</span>
                    <img className="categories-list-item-img" src={chair} alt={"chair"}/>
                        <button className="categories-list-item-btn">Shop Now</button>
                </div>
                <div className="categories-list-item">
                    <span>Kitchenware</span>
                    <img className="categories-list-item-img" src={kitchenware} alt={"kitchenware"}/>
                        <button className="categories-list-item-btn">Shop Now</button>
                </div>
                <div className="categories-list-item">
                    <span>Book Shelf</span>
                    <img className="categories-list-item-img" src={shelf} alt={"shelf"}/>
                        <button className="categories-list-item-btn">Shop Now</button>
                </div>
                <div className="categories-list-item">
                    <span>Electronics</span>
                    <img className="categories-list-item-img" src={electronics} alt={"electronics"}/>
                        <button className="categories-list-item-btn">Shop Now</button>
                </div>
            </div>
        </div>
    )
}

export default Categories;