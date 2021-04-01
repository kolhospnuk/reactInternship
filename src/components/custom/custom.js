import React, {Component} from 'react';
import './custom.css';
import './mediaCustom.css';

import design from "../../icons/design.svg";
import product from "../../icons/product.svg";
import budget from "../../icons/budget.svg";
import area from "../../icons/area.svg";
import SmallFlower from "../flowers/small";
import ModalPersonalized from "./modalPersonalized/modalPersonalized";


export default class Custom extends Component {

    state = {
        modalState: false
    }

    openModal = () => {
        this.setState((state) => ({
            modalState: !state.modalState
        }))
    }

    render() {

        const {modalState} = this.state;
        const {tittleData} = this.props;

        const elem = tittleData.map((item) => {
            const {id, flowerTittle, tittle, classSmallFlower} = item;

            if (id === 'custom') {
                return (
                    <div id="custom"
                         key={id}>
                        <div className="section-tittle">
                            <div className="section-tittle-subtitle">
                                <SmallFlower flowerTittle={flowerTittle}
                                             classSmallFlower={classSmallFlower}/>
                            </div>
                            <div className="section-tittle-line custom-line">
                                <h2>{tittle}</h2>
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
                        <button className="custom-btn orange-btn"
                                onClick={this.openModal}>
                            Get Personalized Now
                        </button>
                        <ModalPersonalized modalState={modalState}/>
                    </div>
                )
            }
            return null;
        })

        return (
            <>
                {elem}
            </>
        )
    }
}