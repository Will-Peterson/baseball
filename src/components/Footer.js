import React from 'react';
import '../App.css' 
import Styled from 'styled-components';

function Footer() {
    return (
        <FooterContainer>
            
            <div className='footer-middle'>
                Facebook / Twitter / YouTube
                <div className='footer-bottom'>
                    Terms of Service | Privacy Policy | Contact
                    <div>&copy; {new Date().getFullYear()} Prove It Athletics</div>
                </div>
            </div>

        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = Styled.footer`
    .footer-middle {
        background: var(--footerBackground);
        color: var(--footerFont);
        padding-top: 3rem;
    }
    .footer-bottom {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
`;