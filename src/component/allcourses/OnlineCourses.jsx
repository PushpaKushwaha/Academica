import React from 'react'
import { online } from '../../dummydata'
import "./courses.css"
import Title from '../common/title/Title'
function OnlineCourses() {
  return (
    <>
    <section className='online py-5'>
      <div className="container text-center py-3">
        <Title subtitle="COURSES" title="Browse Our Online Courses"/>
        <div className="row">
          {online.map((a)=>(
            <div className="col-lg-2 my-3">
              <div className="boxs">
                <div className="img">
                  <img className='w-50 py-4 ' src={a.cover} alt="" /> 
                  <img className='w-50 py-4 show' src={a.hoverCover} alt=""  />
                </div>
               <h4 className='my-3'>{a.courseName}</h4>
               <span>{a.course}</span>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
    </>
  )
}

export default OnlineCourses
