import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur adipisci laborum ducimus illo voluptatibus, rem consequuntur a quod vero libero enim sit magnam, nobis minus pariatur. Dignissimos delectus odio libero enim?</p>
                <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91 6392740132</li>
                    <li>sonal639274@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 @ FoodKART.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
