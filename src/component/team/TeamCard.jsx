import React from 'react'
import { team } from '../../dummydata'
import './team.css'
function TeamCard() {
  return (
    <>
      <section className='teamCard py-5'>
        <div className="container text-center">
            <div className="row">
                {team.map((a)=>(
                    <div className="col-lg-3  ">
                        <div className="box2">
                        <div className="img">
                            <img className='w-100' src={a.cover} />
                            <div className='overlay py-2'>
              <i className='fab fa-facebook-f icon'></i>
              <i className='fab fa-twitter icon'></i>
              <i className='fab fa-instagram icon'></i>
              <i className='fab fa-tiktok icon'></i>
            </div>
                        </div>
                        <div className="detail">
                        <h2>{a.name}</h2>
                        <p>{a.work}</p>
                        </div>
                        </div>
                    </div>
                ))}   
            </div>
        </div>
      </section>
    </>
  )
}

export default TeamCard
