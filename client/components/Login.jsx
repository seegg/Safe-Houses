import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Login () {
  return (
    <>
      <Header />
      <h2>Kia Ora!</h2>
      <h4>Please log in:</h4>
      <form>
        <label htmlFor="username">Username: </label>
        <input type='text'></input>
        <br />
        <label htmlFor="password">Password: </label>
        <input type='text'></input>
      </form>
      <Footer />
    </>
  )
}

export default Login