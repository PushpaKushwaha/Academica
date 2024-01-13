import React from 'react'
import Title from '../common/title/Title'
import PriceCard from '../pricing/PriceCard'

function HPrice() {
  return (
    <>
     <section>
        <div className="container">
            <div className="text-center">
            <Title subtitle='OUR PRICING' title='Pricing & Packages'/>
            </div>
        </div>
    </section> 
    <PriceCard/>
    </>
  )
}

export default HPrice
