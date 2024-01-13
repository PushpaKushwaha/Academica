import React from 'react'
import Title from '../common/title/Title'
import { blog } from "../../dummydata";
function HBlog() {
  return (
    <>
     <section className="blog py-5">
        <div className="container">
        <div className="text-center">
        <Title
            subtitle="our blog"
            title="Recent From Blog"
          />
          </div>
          <div className="row">
            {blog.slice(0,3).map((a) => (
              <div className="col-lg-4">
                <div className="box5">
                  <div className="img">
                    <img className="w-100" src={a.cover} alt="" />
                  </div>
                  <div className="items">
                  <div className="Flexbox">
                    <span>
                      <i className="fa fa-user"></i>
                      <label htmlFor="">{a.type}</label>
                    </span>
                    <span>
                      <i className="fa fa-calendar-alt"></i>
                      <label htmlFor="">{a.date}</label>
                    </span>
                    <span>
                      <i className="fa fa-comments"></i>
                      <label htmlFor="">{a.com}</label>
                    </span>
                  </div>
                  <h2>{a.title}</h2>
                  <p>{a.desc}</p>
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

export default HBlog
