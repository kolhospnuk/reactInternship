import React, {Component} from 'react';
// import './navListItem.css';

export default class NavListItem extends Component {

    state = {
        clazz: "header-nav-menu-item",
        tittleArr: ["#header", "#about", "#custom", "#categories", "#testimony", "SIGN UP"]
    }

    render() {

        const {clazz, tittleArr} = this.state;

        const contentList = tittleArr.map((item, i) => {
            if (i === tittleArr.length - 1) {
                return (
                    <button className="header-nav-menu-btn orange-btn">{tittleArr[tittleArr.length - 1]}</button>
                )
            } else {
                return (
                    <a href={item}>{item.slice(1)}</a>
                )
            }
        })

        return (
            <li className={clazz}>
                {contentList}
            </li>
        )
    }
}