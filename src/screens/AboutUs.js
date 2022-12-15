import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ScreenBanner } from '../components/ScreenBanner'
import {CustomButton} from '../components/buttons/CustomButton'
import {ClientStory} from '../components/ClientStory'
import ServiceManagement from '../assets/images/service-management.png'
import SoftwareCan from '../assets/images/software-can.png'

export const AboutUs = () => {

  return (
    <>
      <ScreenBanner title="About Us" />

      <Container className='aboutus'>
        <Row className='justify-content-center align-items-center'>
          <Col md={6} className="my-5">
            <img src={ServiceManagement} />
          </Col>
          <Col md={6} className="cont my-5">
            <h2>The Best Service Management<br />Software Ready to Help You</h2>
            <p>We're committed to your complete satisfaction with our service. If you're not 100% happy, we'll do whatever it takes to make it right.</p>
            <h3>We're Here for You From<br />Start to Finish</h3>
            <CustomButton label="Contact Us"/>
          </Col>

          <Col md={6} className="my-5">
            <h2>What Our Exclusive Software<br />Can Do For You.</h2>
            <p>Provide an <span>easy and professional</span><br />customer experience.</p>
            <ul>
              <li>Friendly Service</li>
              <li>Fleet Service Available</li>
              <li>Comfort &amp; Convenience</li>
            </ul>
          </Col>
          <Col md={6} className="my-5">
            <img src={SoftwareCan} />
          </Col>

        </Row>
      </Container>

      <Container fluid className='business text-center'>
        <h3>Get in touch any time</h3>
        <h2>Get Started with us for<br />row Your business!</h2>
        <CustomButton label="Send Email"/>
      </Container>

      <ClientStory />
    </>
  )
}
