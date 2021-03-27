import React, {Component} from 'react';
import './navListItem.css';

export default class NavListItem extends Component {

    state = {
        tittles: [
            {name: 'Home', link: "#header"},
            {name: 'About Us', link: "#about"},
            {name: 'How it works', link: "#custom"},
            {name: 'Categories', link: "#categories"},
            {name: 'Testimony', link: "#testimony"},
            {name: 'SIGN UP', link: "#header"}
        ]
    }

    render() {

        const {tittles} = this.state;
        const {openModal} = this.props;

        const contentList = tittles.map((item, i) => {
            if (i === tittles.length - 1) {
                return (
                    <button key={tittles[tittles.length - 1].name}
                            className="header-nav-menu-btn orange-btn"
                            onClick={openModal}>
                        {tittles[tittles.length - 1].name}</button>
                )
            } else {
                return (
                    <a key={item.name} href={item.link}>{item.name}</a>
                )
            }
        })

        return (
            <li className="header-nav-menu-item">
                {contentList}
            </li>
        )
    }
}