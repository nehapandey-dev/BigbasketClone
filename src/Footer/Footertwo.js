import React from 'react'
import './footer.css'

function Footertwo() {
  return (
    <section >
        <div className='footer-two'>
            <div>
                <h6>bigbasket</h6>
                <p>About Us</p>
                <p>In News</p>
                <p>Green Big Basket</p>
                <p>Privacy Policy</p>
                <p>Affiliate</p>
                <p>Terms and Condition</p>
                <p>Career And Bigbasket</p>
                <p>bb insta</p>
                <p>bb daily</p>
            </div>
            <div>
            <h6>Help</h6>
                <p>FAQs</p>
                <p>Contact Us</p>
                <p>bb wallet FAQs</p>
                <p>bb wallet T&Cs</p>
                <p>Vendor Connect</p>
            </div>
            <div>
                <h6>Download Our App</h6>
                <div className='app'><img src='/section-8-img/Google-App-store-icon.png' alt='app'/></div>
                <div className='app'><img src='/section-8-img/Google-App-store-icon.png' alt='app'/></div>
            </div>
            <div>
                <h6>Get Social with us</h6>
                <img src='/social media/2308118_instagram_logo_media_pictures_social_icon.png' alt='img'/>
                <img src='/social media/317731_pinterest_social_social media_icon.png' alt='img'/>
                <img src='/social media/facebook.png' alt='img' width={50}/>
                <img src='/social media/twitter.png' alt='img' width={50}/>
            </div>
        </div>
    </section>
  )
}

export default Footertwo