import React from "react";
import { blog } from "../../dummydata";
import "./blog.css";
function BlogCard() {
  return (
    <>
      <section className="blog">
        <div className="container">
          <div className="row">
            {blog.map((a) => (
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
  );
}

export default BlogCard;
