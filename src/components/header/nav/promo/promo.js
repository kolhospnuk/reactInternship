
import React,{Component} from 'react';
import './promo.css';

import BigFlower from "../../../flowers/big";
import table from "../../../../img/header/table.png";
import ModalFurniture from "./modalFurniture/modalFurniture";


export default class Promo extends Component {

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

        return(
            <div className="header-promo">
                <div className="header-promo-txt">
                    <h3 className="header-promo-txt-furniture">
                        Are you looking for <span>wooden <br/> furniture</span> for your place?
                    </h3>
                    <h2 className="header-promo-txt-place">
                        This is the <br/> Right Place
                    </h2>
                    <button className="header-promo-txt-btn orange-btn"
                            onClick={this.openModal}>
                        Explore Furniture</button>
                </div>
                <div className="header-promo-img">
                    <BigFlower/>
                    <div className="header-promo-img-table">
                        <img src={table} alt={table}/>
                    </div>
                </div>
                <ModalFurniture  modalState={modalState}/>
            </div>
        )
    }
}