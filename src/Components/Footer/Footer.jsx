import React from 'react'
import './Footer.css'
import Kirat_logo from '../../assets/Kirat_logo.png' 

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
            <img src={Kirat_logo} alt=" "/>
          
            </div>
           
            </div>
            <hr/>
            <div className="footer-bottom">
                <p className="footer-bottom-left">2024 Gurkirat Kaur. All rights reserved</p>
                </div>
           <div className="footer-bottom-right">
            <p>Term of Service</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>        
               </div>
        </div>
      </div>
  )
}

export default Footer
