import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export const Footer = () => {


  function footerSubscribe(e) {
    e.preventDefault();
  }
  return (
    <>
      <Container fluid className="footer mt-5">
        <Container className='py-5'>
          <Row>
            <Col md={3}>
              <h2>Serv<span>Quick</span></h2>
            </Col>
            <Col md={3}>
              <h4>Company</h4>

              <p>How it works</p>
              <p>Customers</p>
              <p>About us</p>
              <p>Contact us</p>

            </Col>
            <Col md={3}>
              <h4>Support</h4>

              <p>Help</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditons</p>

            </Col>
            <Col md={3}>
              <h4>News letter</h4>
              <form onSubmit={footerSubscribe}>
                <input type="email" placeholder="Email Address" required /><button type="submit">Subscribe</button>
              </form>
              <ul className="social">
                <Link to="#"><li><i class="fa-brands fa-instagram"></i></li></Link>
                <Link to="#"><li><i class="fa-brands fa-facebook-f"></i></li></Link>
                <Link to="#"><li><i class="fa-brands fa-twitter"></i></li></Link>
                
              </ul>
            </Col>
          </Row>

        </Container>
        <p className="bottom-text">
          Copyright 2022 NetMaxims.com All Rights Reserved.
        </p>

      </Container>
    </>
  )
}
