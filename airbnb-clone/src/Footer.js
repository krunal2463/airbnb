import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className='footer__info'>
                <div className='footer__style'>
                    <h4>ABOUT</h4>
                    <p>How Airbnb works</p>
                    <p>Newsroom</p>
                    <p>Airbnb 2021</p>
                    <p>Made possible by Hosts</p>
                    <p>Careers</p>
                </div>
                
                <div className='footer__style'>
                    <h4 >COMMUNITY</h4>
                    <p>Diversity & Belonging</p>
                    <p>Against Discrimination</p>
                    <p>Accessibility</p>
                    <p>Airbnb Associates</p>
                    <p>Gift cards</p>
                </div>
                
                <div className='footer__style'>
                    <h4>HOST</h4>
                    <p>Host your home</p>
                    <p>Host as Online Experience</p>
                    <p>Host as Experience</p>
                    <p>Resource Center</p>
                    <p>Community Center</p>
                </div>
               
                <div className='footer__style'>
                    <h4>SUPPORT</h4>
                    <p>Our COVID-19 Response</p>
                    <p>Help Center</p>
                    <p>Cancellation options</p>
                    <p>Neighborhood Support</p>
                    <p>Trust & Safety</p>
                    
                </div>
                
            </div>
            
            <p>&copy; 2021 Airbnb clone | Privacy | Terms | Sitemap | Company Details</p>
        </div>
    )
}

export default Footer
