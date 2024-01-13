import React from "react";
import { testimonal } from "../../../dummydata";
import Title from "../../common/title/Title";
import './testimonal.css'
function Testimonal() {
  return (
    <>
      <section className="testimonal py-5">
        <div className="container">
            <div className="text-center">
            <Title subtitle="TESTIMONIAL" title="Our Successful Students"/>
            </div>
          <div className="row">
            {testimonal.map((a) => (
              <div className="col-lg-4">
                <div className="box4">
                  <div className="Flexbox align-items-center py-4">
                    <div className="img">
                      <img className="w-100" src={a.cover}  />
                    </div>
                    <div className="name">
                      <h2>{a.name}</h2>
                      <span>{a.post}</span>
                    </div>
                  </div>
                  <p>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonal;
