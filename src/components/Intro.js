import React from 'react'
import { Link } from 'react-router-dom'
import '../css/intro.scss'
// import About from "../components/About";
export default function Intro () {
  return (
    <div className='main-container'>
      <div className='background'>
        <div className='animated-title'>
          <div className='text-top'>
            <div>
              <span>Hello! I'm Tove Adamsson</span>
              <span>a Software Engineer</span>
            </div>
          </div>
          <div className='text-bottom'>
            <div>
              <span> I appreciate you for checking in!</span>
              <span>Welcome to my  <Link className="button" to="/about">
                Portfolio
              </Link></span>
   
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
