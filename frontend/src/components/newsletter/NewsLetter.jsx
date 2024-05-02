import React from 'react'
import classes from './newsletter.module.css'
import newsphoto from '../../assets/images/get-newsletter-updates.svg'
import { AiOutlineSend } from 'react-icons/ai'

const NewsLetter = () => {
  return (
    <section id='contacts' className={classes.container}>
        <div className={classes.wrapper}>
            <h4 className={classes.subTitle}>Get our latest offer</h4>
            <h2 className={classes.title}>Newsletter</h2>
            <div className={classes.inputContainer}>
                <input type="text" placeholder='Enter your email...'/>
                <AiOutlineSend className={classes.sendIcon} />
            </div>
            <img src={newsphoto} alt='news' className={classes.illustration} />
          

        </div>

    </section>
  )
}

export default NewsLetter