import React from 'react'
import Header from './Header'
import data from '../data/data.json'
import '../css/about.css'

export default function About () {
  const displayTraits = data.traits.map(e => {
    return (
      <div>
        <h2>{e.title}</h2>
        <p>{e.description}</p>
      </div>
    )
  })
  const displaySkills = data.skills.map(e => {
    return (

        // <ul>
        //   <li>{e.title}</li>
        // </ul>
        <p>{e.title}</p>

    )
  })

  return (
    <div className='main-container'>
      <Header />

      <div className='about-section'>
        <div className="text">

        <h1>About Me</h1>
        <p>
          What I've learned about myself, is that I truly enjoy the results of
          my work. Even when at times it seems like taking one step forward and
          two step back, when I solved the issue, I feel great satisfaction and
          motivation to keep going.
        </p>
        </div>
      <div className='skills'>
        <div className='tech'>{displaySkills}</div>
        <div className='trait'>{displayTraits}</div>
      </div>
      </div>
    </div>
  )
}
