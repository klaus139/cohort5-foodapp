import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt='' />
                <p>This is such a nice restaurants with iys great techniogical stackss</p>
                <div className='footer-social-icons'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe0dYH7RtL9Nq2rYH4x7NLUtFWYY3qKYYc3Q&s" alt='' />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Hes3lMh6KIqk0hix6JToJbAXte5wRmjSpFNmlJOlkg&s" alt='' />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png" alt='' />
                </div>

            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+234-90-8382-2332</li>
                    <li>contact@tomato.com</li>
                    </ul> 
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 Tomato.com - All Rights Reserved.</p>

    </div>
  )
}

export default Footer