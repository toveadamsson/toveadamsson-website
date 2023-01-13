import React from 'react'
import '../css/proj.css'
import PhotoOne from '../img/login.webp'
import PhotoTwo from '../img/csswebsite.webp'
import PhotoThree from '../img/beactiv.webp'
import Header from './Header'
function Projects () {
  return (
    <div className='projects' id='projects'>
      <Header />
      <div className='test-compo'>
        <div className='main-container'>
          <section className='announcements'>
            <span>
              Creating a project usually start with me reflecting on what I find
              useful. If it's a website to find where to do sports outside for free in the middle of a pandemic. Or a useful fullstack application with implemented authorization 
              {/* <a href='starbucks.com/rewards.'>Learn more</a> */}
            </span>
          </section>
          <section className='rewards left-right-section'>
            <div className='text'>
              <h1>
                <b>BEACTIV</b>
              </h1>
              <h3>Find out where to do free sport in Barcelona!</h3>

              <a className='cta' href='https://beactiv.surge.sh/'>
                View Website
              </a>
            </div>
            <div className='image'>
              <img src={PhotoThree} alt='beactiv website' />
            </div>
          </section>
          <section className='chill left-right-section'>
            <div className='image'>
              <img src={PhotoOne} alt='' />
            </div>
            <div className='text'>
              <h1>Register and Login</h1>
              <h3>
                A register and login website <br />
                Created using MERN stack
                <br />( Mongodb, Express, React, Node.js )
              </h3>
              <a className='cta' href='https://login-website-ta.herokuapp.com/'>
                View Website
              </a>
            </div>
          </section>
          <section className='rewards left-right-section'>
            <div className='text'>
              <h1>
                <b>CSS Template website</b>
              </h1>
              <h3>
                You're welcome to use this website as a template for a future
                project of yours!
              </h3>

              <a
                className='cta'
                href='https://css-website-practice.netlify.app/'
              >
                View Website
              </a>
            </div>
            <div className='image'>
              <img src={PhotoTwo} alt='beactiv website' />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Projects
