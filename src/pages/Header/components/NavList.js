
import React,{Component} from 'react';
import '../scss/navList.css';
import NavListItem from "./NavListItem";
import ModalSignUp from "./ModalSignUp";

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