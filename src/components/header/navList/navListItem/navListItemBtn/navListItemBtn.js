
import React,{Component} from 'react';
import './navListItem.css';

export default class NavListItem extends Component {

    state = {
        clazz: "header-nav-menu-item",
        tittleArr: ["#header", "#about", "#custom", "#categories", "#testimony", "SIGN UP"]
    }

    render() {

        const {clazz, tittleArr} = this.state;

        const itemList = tittleArr.map((item) => {

            if (item === tittleArr[tittleArr.length - 1]) {
                return (
                    <li className={clazz}>
                        <button className="header-nav-menu-btn orange-btn">{item}</button>
                    </li>
                )
            }

            return (
                <li className={clazz}><a href={item}>{item.slice(1)}</a></li>
            )
        })

        return (
            <>
                {itemList}
            </>
        )
    }
}