
import React, {Component} from 'react';
import './scss/footer.css';
import './scss/meadiaFooter.css';
import Form from "./components/Form";
import MenuList from "./components/MenuList";

export default class Footer extends Component {

    render() {
      const { tittleData } = this.props;

        return (
            <div id="footer">
                <Form/>
                <div className="footer-line"/>
                <MenuList
                  tittleData={tittleData}
                />
                <h4>© 2020 WOODIES</h4>
            </div>
        )
    }
}