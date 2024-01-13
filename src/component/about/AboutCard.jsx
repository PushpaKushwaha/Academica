import React from 'react'
import Title from '../common/title/Title'
import { homeAbout } from '../../dummydata'
import './about.css'
import AWrapper from './AWrapper'
function AboutCard() {
  return (
    <>
      /* <section className='aboutHome py-5'>
        <div className="container">
           
            <div className="row">
                <div className="col-lg-6 img">
                    <img className='w-100 h-100' src="./public/img/about.webp" alt="" />
                </div>
                <div className="col-lg-6 right ">
                    <Title subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise'/>
                    <div className="row">
                    {homeAbout.map((val) => 
                 (
                  <div className='flex item'>
                    <div className='col-lg-2'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='col-lg-10'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              )}
                    </div>
                </div>
            </div>
        </div>
     </section> 
     <AWrapper/> 
    </>
  )
}

export default AboutCard
