import React from 'react'
import { useLocation } from 'react-router-dom'
import Back from '../common/back/Back'
import AboutCard from './AboutCard'

function About() {
    const location=useLocation()
  return (
    <>
      <Back title='About Us'/>
      <AboutCard/>
    </>
  )
}

export default About
