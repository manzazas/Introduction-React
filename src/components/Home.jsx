import React from 'react'
import "./Home.css"
import Nav from './Nav'
import Footer from './Footer'
import selfie from '../assets/selfie.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-page">
      <Nav />
      <div className = "centered">
      <h1>
        Hey, We're{" "}
        <Link to="/ye" className="name-button ye-button">Ye</Link>{" "}
        <Link to="/saj" className="name-button saj-button">Saj</Link>{" "}
        and <Link to="/zach" className="name-button zach-button">Zach</Link>
      </h1>
      <img src={selfie} alt="A selfie of Ye, Saj, and Zach" style={{ width: '300px', borderRadius: '10px' }} />
      <p>Welcome to the home page!</p>
      <p>This is the main content area.</p>
      <Footer />
    </div>
    </div>
  )
}

export default Home