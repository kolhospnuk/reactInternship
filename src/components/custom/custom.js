
import React from 'react';
import './custom.css';
import './mediaCustom.css';

import design from "../../icons/design.svg";
import product from "../../icons/product.svg";
import budget from "../../icons/budget.svg";
import area from "../../icons/area.svg";


const Custom = () => {

    return (
        <div id="custom">
            <div className="section-tittle">
                <div className="section-tittle-subtitle">
                    <div className="small-flower">
                        <div className="small-flower-item"/>
                        <div className="small-flower-item"/>
                        <div className="small-flower-item"/>
                        <div className="small-flower-item"/>
                    </div>
                    <span>How to custom</span>
                </div>
                <div className="section-tittle-line custom-line">
                    <h2>HOW IT WORKS</h2>
                </div>
            </div>
            <div className="plan">
                <div className="plan-item">
                    <div className="plan-item-img plan-num1">
                        <img src={design} alt={"design"}/>
                    </div>
                    <div className="plan-item-txt">Choose Design</div>
                </div>
                <div className="plan-item">
                    <div className="plan-item-img plan-num2">
                        <img src={area} alt={"area"}/>
                    </div>
                    <div className="plan-item-txt">Area measuring</div>
                </div>
                <div className="plan-item">
                    <div className="plan-item-img plan-num3">
                        <img src={budget} alt={"budget"}/>
                    </div>
                    <div className="plan-item-txt">Budgeting</div>
                </div>
                <div className="plan-item">
                    <div className="plan-item-img plan-num4">
                        <img src={product} alt={"product"}/>
                    </div>
                    <div className="plan-item-txt">Production</div>
                </div>
            </div>
            <button className="custom-btn orange-btn">
                Get Personalized Now
            </button>
        </div>
    )
}

export default Custom;