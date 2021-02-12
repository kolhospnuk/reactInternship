import React, {Component} from 'react';
import SmallFlower from "../../../flowers/small";

export default class MenuListItem extends Component {

    state = {
        orangeFlower: true,
        flowerTittle: 'WOODIES'
    }

    openLink = () => {
        alert("Open link");
    }

    render() {

        const {listItemArr, i} = this.props;
        const {orangeFlower, flowerTittle} = this.state;

        const elements = listItemArr[i].map((item, iter) => {

            if (i === 0 && iter === 0) {
                return (
                    <SmallFlower orangeFlower={orangeFlower}
                                 flowerTittle={flowerTittle}/>
                )
            } else {
                return (
                    <li className="footer-menu-list-item"
                        onClick={this.openLink}>{item}</li>
                )
            }
        })

        return (
            <>
                {elements}
            </>
        )
    }
}