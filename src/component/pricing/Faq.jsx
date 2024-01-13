import React from 'react'
import Title from '../common/title/Title'
import { faq } from '../../dummydata'

function Faq() {
  return (
    <>
      <section className='faq text-center'>
        <div className="container">
            <Title subtitle='faqs' title='Frequesntly Ask Question'/>
            <div className="row py-4">
                {faq.map((a)=>(
                    <div className="col-lg-12 my-3">
                         <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    {a.title}
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                    {a.desc}
                  </div>
                </div>
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

export default Faq
