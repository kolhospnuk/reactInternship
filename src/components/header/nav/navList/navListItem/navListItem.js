import React, {Component} from 'react';
// import './navListItem.css';

export default class NavListItem extends Component {

    state = {
        tittleArr: ["#header", "#about", "#custom", "#categories", "#testimony", "SIGN UP"],
        classList: "header-nav-menuList-item",
    }

    render() {

        const {classList, tittleArr} = this.state;
        const {openModal} = this.props;

        const contentList = tittleArr.map((item, i) => {
            if (i === tittleArr.length - 1) {
                return (
                    <button className="header-nav-menu-btn orange-btn"
                            onClick={openModal}>
                        {tittleArr[tittleArr.length - 1]}</button>
                )
            } else {
                return (
                    <a href={item}>{item.slice(1)}</a>
                )
            }
        })

        return (
            <li className={classList}>
                {contentList}
            </li>
        )
    }
}