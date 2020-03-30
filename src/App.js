import React from 'react'
import './style.scss'
import logo from './img/logo.svg'
import arrow from './img/icon-arrow.svg'

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-7 hero-left">
          <div className="row logo">
            <div className="col-md-3 offset-md-2">
              <img src={logo} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-2">
              <h1>We're <span className="head-bold">coming soon</span></h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 offset-md-2">
              <p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
            </div>
          </div>
          <div className="row form">
            <div className="col-md-7 offset-md-2">
              <input type="email" id="mail" name="mail" placeholder="Email Address"/>
            </div>
            <div className="col-md-2">
              <input type="submit" id="submit" name="submit" placeholder="" value=""/>
            </div >
          </div>
        </div>
        <div className="col-md-5 hero-right">
        </div>
      </div>
    </div>
  )
}

export default App
