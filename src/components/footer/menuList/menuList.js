import React, {Component} from 'react';
import './menuList.css';
import MenuListItem from "./menuListItem/menuListItem";

export default class MenuList extends Component {

    state = {
        orangeFlower: true,
        flowerTittle: 'WOODIES',
        listItemArr: [
            ['Product', '(012) 8967453', 'woodies@gmail.com', 'Jakarta, Indonesia'],
            ['Product', 'Furnitures','Packages', 'Services'],
            ['Resources', 'Blog', 'FAQs', 'Contact Us'],
            ['Company', 'About Us', 'Jobs', 'Our Team'],
            ['Follow Us', 'Facebook', 'Instagram', 'Twitter']
        ]
    }

    render() {

        const {listItemArr} = this.state;

        const elements = listItemArr.map((item, i) => {

            return (
                <ul className="footer-menu-list">
                    <MenuListItem listItemArr={listItemArr}
                              i={i}/>
                </ul>
            )
        })

        return (
            <div className="footer-menu">
                {elements}
            </div>
        )
    }
}