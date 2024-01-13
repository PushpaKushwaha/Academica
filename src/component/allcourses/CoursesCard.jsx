import React from "react";
import { coursesCard } from "../../dummydata";
import "./courses.css";
function CoursesCard() {
  return (
    <>
      <section className="coursesCard py-5">
        <div className="container">
          <div className="row">
            {coursesCard.map((a) => (
              <div className="col-lg-4 items py-5 ">
                <div className="box1">
                  <div className="img ">
                    <img className="w-100" src={a.cover} alt="" />
                  </div>
                  <div className="text">
                    <h1 className="h1">{a.coursesName}</h1>
                    <div className="rate ">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <label htmlFor="">(5.0)</label>
                    </div>
                  </div>
                  <div className="row">
                    {a.courTeacher.map((details) => (
                      <>
                        <div className="box">
                          <div className="dimg">
                            <img src={details.dcover} alt="" />
                          </div>
                          <div className="name">
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span className="span">{details.totalTime}</span>
                      </>
                    ))}
                  </div>
                  <div className="price">
                    <h3>
                      {a.priceAll} / {a.pricePer}
                    </h3>
                  </div>
                  <button className="outline-btn">ENROLL NOW</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CoursesCard;
