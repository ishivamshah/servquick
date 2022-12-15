import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ScreenBanner } from '../components/ScreenBanner'
import { CustomButton } from '../components/buttons/CustomButton'
import SendMessage from '../assets/images/send-message.png'
import Cunsulting from '../assets/images/cunsulting-with.png'
import Settings from '../assets/images/settings-about.png'
import OpeningHour1 from '../assets/images/unread-message-about.png'
import OpeningHour2 from '../assets/images/phone-about-icon.png'
import OpeningHour3 from '../assets/images/location-maps.png'


export const ContactUs = () => {

  function sendMssg(e) {
    e.preventDefault();
  }

  return (
    <>
      <ScreenBanner title="Contact Us" />

      <Container className='text-center contact-sec1 py-5'>
        <h3>Easy Steps</h3>
        <h2>Three easy steps to get in touch</h2>
      </Container>

      <Container fluid className='contact-sec2 text-center'>
        <Container>
          <Row>
            <Col md={4}>
              <div className='box'>
                <img src={SendMessage} />
                <h4>Send Message</h4>
              </div>
            </Col>
            <Col md={4}>
              <div className='box'>
                <img src={Cunsulting} />
                <h4>Consult with Us!</h4>
              </div>
            </Col>
            <Col md={4}>
              <div className='box'>
                <img src={Settings} />
                <h4>Get Connected</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <h2 className='getintouch'>Get in touch!</h2>

      <Container fluid className='getouch-sec'>
        <Container>
          <Row>
            <Col md={8}>
              <form onSubmit={sendMssg}>
                <h3>SEND US A MESSAGE</h3>
                <div className='form-group'>
                  <label>Your Name</label>
                  <input type='name' placeholder='E.g Jason drake' required />
                </div>
                <Row>
                  <Col md={6}>
                    <div className='form-group'>
                      <label>Phone Number</label>
                      <input type='tel' placeholder='E.g 888-999-777' required />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className='form-group'>
                      <label>E-mail</label>
                      <input type='email' placeholder='E.g jason123@gmail.com' required />
                    </div>
                  </Col>


                </Row>
                <div className='form-group'>
                  <label>Your message</label>
                  <textarea placeholder='E.g jason123@gmail.com' />
                </div>

                <button type='submit'>Send Message</button>


              </form>
            </Col>
            <Col md={4}>
              <div className='opening-hour'>
                <h3>OPENING HOURS</h3>
                <ul>
                  <li><img src={OpeningHour3} />Åkerbärsvägen 14 611<br />38 Nyköping</li>
                  <li><img src={OpeningHour2} />888-999-777</li>
                  <li><img src={OpeningHour1} />e.g jason123@gmail.com</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>

      </Container>

      <Container>
        <div class="mapouter"><div class="gmap_canvas"><iframe width="1500" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Bryant%20Park&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"></a></div></div>
      </Container>
    </>


  )
}
