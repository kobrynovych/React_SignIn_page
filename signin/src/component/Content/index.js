import React, { useState } from 'react'
import logo from '../../assets/img/logo.jpg'
import classes from './styles.module.scss'
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
// import classes from './styles.module.scss'
// import './styles.scss'
// import image1 from '../../assets/img/img1.svg'
// import image2 from '../../assets/img/img2.svg'
// import image3 from '../../assets/img/img3.svg'

export default function Content() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = () => {

  }
  const handleChange = () => {
    
  }
    return (
      <>
        <img src={logo} alt='logo' className={classes.logo} />
        <h1 className={classes.title}>Merge development</h1>

        <h4 className={classes.form_title}>Sign in</h4>
        <p className={classes.form_text}>Dont't have an Xcellerate account?</p>
        <a href='#' className={classes.form_link}>Sign up now</a>

        <form className={classes.form} onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            // value={email}
          />
          {/* <div className={classes.password_wrapper}> */}
            <label htmlFor="firstName">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
              // value={password}
              placeholder='Forgot your password?'
            />
            {/* <p className={classes.placholder}>Forgot your password?</p> */}
          {/* </div> */}
          <button type="submit">Sing in</button>
        </form>
        


      </>
    )
}