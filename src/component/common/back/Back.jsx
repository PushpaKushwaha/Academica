import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function Back({title}) {
    // const location=useLocation()
    const param=useParams()
  return (
    <>
    <section className='back'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center py-5 ">
                <h2>Home/ {location.pathname.split('/')[1]}</h2>
                <h1>{title}</h1>
                </div>
            </div>
        </div>
        
    </section>
      
    </>
  )
}

export default Back
