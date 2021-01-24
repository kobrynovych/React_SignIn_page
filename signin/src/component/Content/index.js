import React, { useState } from 'react'
import logo from '../../assets/img/logo.jpg'
import classes from './styles.module.scss'

export default function Content() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocusEmail, setIsFocusEmail] = useState(false);
  const [isFocusPassword, setIsFocusPassword] = useState(false);
  const isValidEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(email);
  const btnClassName = (isValidEmail && password.length>3) ? `${classes.btn} ${classes.active_btn}` : `${classes.btn}`;
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleChange = (e) => {
    if (e.target.name === 'email') setEmail(e.target.value)
    if (e.target.name === 'password') setPassword(e.target.value)
  }
    return (
      <>
        <img src={logo} alt='logo' className={classes.logo} />
        <h1 className={classes.title}>Merge development</h1>
        <h2 className={classes.form_title}>Sign in</h2>
        <p className={classes.form_text}>Dont't have an Xcellerate account?</p>
        <a href='#' className={classes.form_link}>Sign up now</a>
        <form className={classes.form} onSubmit={handleSubmit} autoComplete="off">
          <label className={classes.label} htmlFor="email">
            <span>Email</span>
            {!isValidEmail && !isFocusEmail && (<span className={classes.mess_err}>Invalid email</span>)}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
            required
            autoComplete="off"
            onBlur={() => setIsFocusEmail(false)}
            onFocus={() => setIsFocusEmail(true)}
            onChange={handleChange}
            value={email}
          />
          <label className={classes.label_password} htmlFor="password">
            <span>Password</span>
            {password.length < 4 && isFocusPassword && (<span className={classes.mess_err}>Invalid format too short</span>)}
            <p className={classes.placholder}>Forgot your password?</p>
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            minLength="4" 
            autoComplete="off"
            onChange={handleChange}
            onFocus={() => setIsFocusPassword(true)}
            value={password}
          />
          <button className={btnClassName} type="submit">Sing in</button>
        </form>
        <a className={classes.nav_bottom} href="#">Contact</a>
        <a className={classes.nav_bottom} href="#">Privacy</a>
        <a className={classes.nav_bottom} href="#">Terms</a>
      </>
    )
}