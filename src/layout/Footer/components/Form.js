import React, { Component } from 'react';
import '../scss/form.css';

export default class Form extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    // eslint-disable-next-line react/no-unused-state
    email: ''
  }

  emailChange = (e) => {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      email: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    alert('Email sent');
  }

  render() {
    return (
      <div className="footer-form">
        <div className="footer-form-txt">
          <h3>Subscribe to our newsletter</h3>
          <span>
            A monthly digest of the new WOODIES products, hot offers, and
            <br />
            resources.
          </span>
        </div>
        <form
          action="#"
          onSubmit={this.onSubmit}
        >
          <input
            name="email"
            type="email"
            placeholder="Your email address"
            required
            onChange={this.emailChange}
          />
          <button
            className="footer-form-btn orange-btn"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    );
  }
}
