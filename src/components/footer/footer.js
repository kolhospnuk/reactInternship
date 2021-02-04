
import React from 'react';
import './footer.css';
import './meadiaFooter.css';

const Footer = () => {

    return (
        <section id="footer">
            <div className="footer-form">
                <div className="footer-form-txt">
                    <h3>Subscribe to our newsletter</h3>
                    <span>A monthly digest of the new WOODIES products, hot offers, and <br/> resources.</span>
                </div>
                <form action="#">
                    <input name="email" type="email" placeholder="Your email address" required/>
                        <button className="footer-form-btn orange-btn" type="submit">Subscribe</button>
                </form>
            </div>
            <div className="footer-line"/>
            <div className="footer-menu">
                <ul className="footer-menu-list">
                    <li className="footer-menu-list-item">
                        <div className="small-flower orange-flower-footer">
                            <div className="small-flower-item orange"/>
                            <div className="small-flower-item orange"/>
                            <div className="small-flower-item orange"/>
                            <div className="small-flower-item orange"/>
                        </div>
                        <h3>WOODIES</h3>
                    </li>
                    <li className="footer-menu-list-item"><a href="tel:0128967453">(012) 8967453</a></li>
                    <li className="footer-menu-list-item"><a
                        href="mailto:woodies@gmail.com">woodies@gmail.com</a></li>
                    <li className="footer-menu-list-item">Jakarta, Indonesia</li>
                </ul>
                <ul className="footer-menu-list">
                    <li className="footer-menu-list-item">Product</li>
                    <li className="footer-menu-list-item"><a href="#">Furnitures</a></li>
                    <li className="footer-menu-list-item"><a href="#">Packages</a></li>
                    <li className="footer-menu-list-item"><a href="#">Services</a></li>
                </ul>
                <ul className="footer-menu-list">
                    <li className="footer-menu-list-item">Resources</li>
                    <li className="footer-menu-list-item"><a href="#">Blog</a></li>
                    <li className="footer-menu-list-item"><a href="#">FAQs</a></li>
                    <li className="footer-menu-list-item"><a href="#">Contact Us</a></li>
                </ul>
                <ul className="footer-menu-list">
                    <li className="footer-menu-list-item">Company</li>
                    <li className="footer-menu-list-item"><a href="#">About Us</a></li>
                    <li className="footer-menu-list-item"><a href="#">Jobs</a></li>
                    <li className="footer-menu-list-item"><a href="#">Our Team</a></li>
                </ul>
                <ul className="footer-menu-list">
                    <li className="footer-menu-list-item">Follow Us</li>
                    <li className="footer-menu-list-item"><a href="#">Facebook</a></li>
                    <li className="footer-menu-list-item"><a href="#">Instagram</a></li>
                    <li className="footer-menu-list-item"><a href="#">Twitter</a></li>
                </ul>
            </div>
            <h4>© 2020 WOODIES</h4>
        </section>
    )
}

export default Footer;