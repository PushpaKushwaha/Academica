import React from 'react'
import { price } from '../../dummydata'
import './price.css'
function PriceCard() {
  return (
    <>
    <section className='priceCard text-center'>
        <div className="container">
            <div className="row">
                {price.map((a)=>(
                    <div className="col-lg-3">
                        <div className="box3">
                            <h4>{a.name}</h4>
                            <h2>
                                <span>$</span>
                                {a.price}
                            </h2>
                            <p className='py-2'>{a.desc}</p>
                            <button className='outline-btn fw-bold'>GET STARTED</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>  
    </>
  )
}

export default PriceCard
