
import React,{Component} from 'react';
import './navList.css';
import NavListItem from "./navListItem/navListItem";
import ModalSignUp from "./modaSignUp/modalSignUp";

export default class NavList extends Component {

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

        return (
            <>
                <ul className="header-nav-menu">
                    <NavListItem openModal={this.openModal}/>
                </ul>
                <ModalSignUp modalState={modalState}/>
            </>
        )
    }
}