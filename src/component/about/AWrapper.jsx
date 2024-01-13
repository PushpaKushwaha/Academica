import React from 'react'
import { awrapper } from '../../dummydata'
function AWrapper() {
  return (
    <>
    <section className='awrapper py-5'>
        <div className="container ">
            <div className="row ">
                {awrapper.map((a)=>(
                    <div className="col-lg-3">
                    <div className='d-flex py-2'>
                        <div className='img'>
                             <img src={a.cover} alt='' />
                        </div>
                        <div className="text ">
                            <h1 className='fw-bold'>{a.data}</h1>
                            <h3>{a.title}</h3>
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

export default AWrapper
