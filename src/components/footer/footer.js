
import React, {Component} from 'react';
import './footer.css';
import './meadiaFooter.css';
import Form from "./form/form";
import Menu from "./menuList/menuList";

export default class Footer extends Component {

    render() {

        return (
            <div id="footer">
                <Form/>
                <div className="footer-line"/>
                <Menu/>
                <h4>© 2020 WOODIES</h4>
            </div>
        )
    }
}