import React from 'react'
import './hero.css'
import Title from '../../common/title/Title'

function Hero() {
  return (
    <>
      <section className='hero'>
        <div className="container ">
          <div className="row py-5 border-bottom">
            <div className="col-lg-6 py-5 text-white ">
              <Title subtitle='WELCOME TO ACADEMIA' title='Best Online Education Expertise'/>
              <p className='text-white'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              
            </div>
          </div>
          <div className="row py-5">
            <div className="col-lg-6">
              <button className='Fbtn btn-lg'>GET STARTED NOW <i class="fa-solid fa-right-long"></i></button>
              <button className='Sbtn btn-lg'>VIEW COURSES <i class="fa-solid fa-right-long"></i></button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
