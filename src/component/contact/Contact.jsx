import React from 'react'
import './contact.css'
import Back from '../common/back/Back'
function Contact() {
  const map='https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d904726.610278206!2d85.245655!3d27.652739!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1703921350302!5m2!1sen!2sus'
  return (
    <>
      <Back title="Contact Us"/>
      <section className='contacts'>
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-lg-6 ">
              <iframe src={map} frameborder="0"></iframe>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d904726.610278206!2d85.245655!3d27.652739!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1703921350302!5m2!1sen!2sus" width="600" height="700" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
            <div className="col-lg-6 py-5 px-5">
              <h2>Contact us</h2>
              <p>We're open for any suggestion or just to have a chat</p>
              <div className="row">
                <div className="col-lg-4">
                  <h3>ADDRESS:</h3>
                  <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
                <div className="col-lg-4">
                  <h3>EMAIL:</h3>
                  <p>info@yoursite.com</p>
                </div>
                <div className="col-lg-4">
                  <h3>PHONE:</h3>
                  <p>+ 1235 2355 98</p>
                </div>
              </div>
              <form action="">
                <div className="flexpost">
                <input type="text" name="" id="" placeholder='Name'/>
                <input type="text" name="" id="" placeholder='Email'/>
                </div>
                <input type="text" name="" id="" placeholder='Subject' /> <br />
                <textarea name="" id="" cols="30" rows="10" placeholder='Create a message here...'>  
                </textarea> <br />
                <button className='Fbtn'>SEND MESSAGE</button>
              </form>
              <h3>Follow us here</h3>
              <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
