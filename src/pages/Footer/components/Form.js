
import React, {Component} from 'react';
import '../scss/form.css';

export default class Form extends Component {

    state = {
        email: ''
    }

    emailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        alert("Email sent")
    }

    render() {

        return (
            <div className="footer-form">
                <div className="footer-form-txt">
                    <h3>Subscribe to our newsletter</h3>
                    <span>A monthly digest of the new WOODIES products, hot offers, and <br/> resources.</span>
                </div>
                <form action="#"
                        onSubmit={this.onSubmit}>
                    <input name="email"
                           type="email"
                           placeholder="Your email address"
                           required
                            onChange={this.emailChange}/>
                    <button className="footer-form-btn orange-btn"
                            type="submit">
                        Subscribe</button>
                </form>
            </div>
        )
    }
}