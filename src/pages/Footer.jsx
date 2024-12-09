import React from 'react'
import './footer.css'
function Footer({active}) {
  return (
    <div className={`footer1 ${active ? 'active' : undefined}`}>
        <div className='footerdivider'>
        </div>
            <div className='store'>
                <div className='playstore'>
                <i class="bi bi-google-play"></i>
                <a href="#">PlayStore</a>
                </div>
                <div className='appstore'>
                <i class="bi bi-apple"></i>
                <a href="#">AppleStore</a>
                </div>
            </div>
            <div className='socialfooter'>
            <a href="#"><i class="bi bi-twitter"></i></a>
            <a href="#"><i class="bi bi-youtube"></i></a>
            <a href="#"><i class="bi bi-facebook"></i></a>
            </div>
            <div className='copyright'>
            Copyright © 2023 All right reserved by Anime.mn
            </div>
        </div>
  )
}

export default Footer