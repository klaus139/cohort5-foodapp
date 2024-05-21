import React from 'react'
import './appDownload.css'
import { assets } from '../../assets/assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br /> Tomato App</p>
        <div className='app-download-platforms'>
            <img src={assets.playStore} alt='' />
            <img src={assets.appStore} alt='' />
        </div>

    </div>
  )
}

export default AppDownload