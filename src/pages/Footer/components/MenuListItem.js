import React, {Component} from 'react';
import SmallFlower from "../../../components/Flowers/Small";

export default class MenuListItem extends Component {

    state = {
        flowerTittle: 'WOODIES'
    }

    openLink = () => {
        alert("Open link");
    }

    render() {

        const {listItemArr, i} = this.props;
        const {flowerTittle} = this.state;

        const elements = listItemArr[i].map((item, iter) => {

            if (i === 0 && iter === 0) {
                return (
                    <SmallFlower key={item}
                                 flowerTittle={flowerTittle}/>
                )
            } else {
                return (
                    <li key={item}
                        className="footer-menu-list-item"
                        onClick={this.openLink}>
                        {item}
                    </li>
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