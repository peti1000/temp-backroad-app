import React from 'react';
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

function Footer(props) {
    return (
        <footer className="section footer">
            <PageLinks parentClass='footer-links' itemClas='footer-link' />
            <SocialLinks parentClass='footer-icons' itemClass='footer-icon'/>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{new Date().getFullYear()}</span> all rights reserved
            </p>
        </footer>
    );
}

export default Footer;