
import React, {Component} from 'react';
import './scss/footer.css';
import './scss/meadiaFooter.css';
import Form from "./components/Form";
import Menu from "./components/MenuList";

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