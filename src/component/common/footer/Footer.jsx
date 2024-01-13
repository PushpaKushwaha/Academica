import React from "react";
import "./footer.css";
import { blog } from "../../../dummydata";

function Footer() {
  return (
    <>
      <section className="newsletter">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6 py-5">
              <div className="new">
                <h4>Newsletter - Stay tune and get the latest update</h4>
                <span>Far far away, behind the word mountains</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="input">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter email address"
                />
                {/* <i className='fa fa-paper-plane'></i> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-5">
        <div className="container ">
          <div className="row">
            <div className="col-lg-3">
              <div className="box7">
              <h1>ACADEMIA</h1>
              <span className="">ONLINE EDUCATION & LEARNING</span>
              </div>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <div className="icons">
                <i className="fab fa-facebook-f icon"></i>
                <i className="fab fa-instagram icon"></i>
                <i className="fab fa-twitter icon"></i>
          
              </div>
              
            </div>
            <div className="col-lg-2 link">
              <h3 >Explore</h3>
              <ul>
                <li>About Us</li>
                <li>Services</li>
                <li>Courses</li>
                <li>Blog</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className="col-lg-2 link">
              <h3>Quick Links</h3>
              <ul>
                <li>Contact Us</li>
                <li>Pricing</li>
                <li>Terms & Conditions</li>
                <li>Privacy</li>
                <li>Feedbacks</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h3>Recent Post</h3>
              {blog.slice(0, 3).map((a) => (
                <div className="box6">
                  <div className="flexpost">
                  <div className="img">
                    <img src={a.cover} alt="" />
                  </div>
                  <div className="post">  
                      <span>
                        <i className="fa fa-calendar-alt"></i>
                        <label htmlFor="">{a.date}</label>
                      </span>
                      <span>
                        <i className="fa fa-comments"></i>
                        <label htmlFor="">{a.com}</label>
                      </span>
                      <h2>{a.title}</h2>
                  </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-2">
              <div className="last">
              <h3>Have a Questions?</h3>
              <ul>
                <li>
                <i className='fa fa-map'></i>
                203 Fake St. Mountain View, San Francisco, California, USA
                </li>
                <li>
                <i className='fa fa-phone-alt'></i>
                +2 392 3929 210
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@yourdomain.com
              </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright text-center">
        <p>Copyright ©2022 All rights reserved | This template is made with  by GorkhCoder</p>
      </div>
    </>
  );
}

export default Footer;
