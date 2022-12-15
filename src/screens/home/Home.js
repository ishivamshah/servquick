import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CustomButton } from '../../components/buttons/CustomButton'
import Centralized from '../../assets/images/platrform.png'
import NonTouch from '../../assets/images/non-touch.png'
import Schedule from '../../assets/images/wall-clock.png'
import Enterprice from '../../assets/images/features.png'
import RepeatCustomer from '../../assets/images/repeate-customer.png'
import Carousel from 'react-bootstrap/Carousel';
import One from '../../assets/images/Ellipse-slider.png'
import Two from '../../assets/images/Ellipse-169.png'
import Three from '../../assets/images/Ellipse-170.png'
import Question from '../../assets/images/qustion-mark.png'
import GooglePlay from '../../assets/images/google-play.png'
import AppStore from '../../assets/images/app-store.png'
import YourRequest from '../../assets/images/Icon material-cjj.png'
import PickService from '../../assets/images/choice-cjj.png'
import GetService from '../../assets/images/check-cjj.png'
import ProfassionalImg from '../../assets/images/profassional-image.png'
import ProfassionalIcon from '../../assets/images/professional-team-icon.png'
import { Link } from 'react-router-dom'
import { ClientStory } from '../../components/ClientStory'

export const Home = () => {


  function eMaintain(e)
    {
        e.preventDefault()
    }

  return (
    <>
      <Container fluid className="home-banner">
        <Container>
          <Row>
            <Col md={6}>
              <h1>The Fastest and Easiest to use Field <span> Service Software for your small business.</span></h1>
              <CustomButton className="tryfree" label="Try For Free" />
              <div className="download">
                <Link to="#"><img src={GooglePlay} /></Link>
                <Link to="#"><img src={AppStore} /></Link>
              </div>
            </Col>
            <Col md={6}>

            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="your-customer">
        <h4 className="make-managing text-center">
          ServQuick makes managing your service calls easy so you<br />can focus on what matters most:<br />YOUR CUSTOMERS
        </h4>
        <Row className='my-5'>
          <Col md={3}>
            <div className="box text-center">
              {/* <img src="../../../images/features.png" /> */}
              <img src={Centralized} />
              <h4>Centralized Platform</h4>
              <p>Complete all tasks with a few clicks in one centralized system, including managing customer calls, scheduling, and monitoring your fleet.

              </p>
            </div>
          </Col>
          <Col md={3}>
            <div className="box text-center">
              <img src={NonTouch} />
              <h4>No-Touch Communication</h4>
              <p>Email estimates and job confirmations to customers, eSign documents, plus assign jobs to projects and sales reps, and more.

              </p>
            </div>
          </Col>
          <Col md={3}>
            <div className="box text-center">
              <img src={Schedule} />
              <h4>Scheduling & Dispatch<br />from Anywhere</h4>
              <p>Schedule jobs without overlap, dispatch job information to your field workers' phones, and automatically let customers know when a tech is on the way.

              </p>
            </div>
          </Col>
          <Col md={3}>
            <div className="box text-center">
              <img src={Enterprice} />
              <h4>Enterprise Features,<br />small Business Pricing</h4>
              <p>With flat-rate pricing, you get enterprise-level features at a cost that doesn't grow with your business.

              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="sec2">
        <Container>
          <Row>
            <Col md={6} className="pt-5">
              <h4>Manage your team from anywhere. Stay informed of your technicians progress with our customized dashboard. Provide your customers with updates about the status of their work order via automatic texts and emails. Try ServQuick for free and see how we can become more efficient together.</h4>
              <CustomButton label="FREE DEMO" />
            </Col>
            <Col md={6}>
              <img src={RepeatCustomer} />
            </Col>
          </Row>
        </Container>
      </Container>


      {/* <Container fluid className="sec4">
        <div className="text-center title">
          <img src={Question} />
          <h4>Our valuable success clients story</h4>
        </div>

        <Carousel controls={false} variant="dark">
          <Carousel.Item>
            <Row className="text-center">
              <Col md={4}>
                <img src={One} />
                <h4>Gulzar Sampath</h4>
                <p>Email estimates and job confirmations to customers, eSign documents, plus and more.</p>
              </Col>
              <Col md={4}>
                <img src={Two} />
                <h4>Gulzar Sampath</h4>
                <p>Email estimates and job confirmations to customers, eSign documents, plus and more.</p>
              </Col>
              <Col md={4}>
                <img src={Three} />
                <h4>Gulzar Sampath</h4>
                <p>Email estimates and job confirmations to customers, eSign documents, plus and more.</p>
              </Col>
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row className="text-center">
              <Col md={4}>
                <img src={One} />
                <h4>Gulzar Sampath</h4>
                <p>Email estimates and job confirmations to customers, eSign documents, plus and more.</p>
              </Col>
              <Col md={4}>
                <img src={Two} />
                <h4>Gulzar Sampath</h4>
                <p>Email estimates and job confirmations to customers, eSign documents, plus and more.</p>
              </Col>
              <Col md={4}>
                <img src={Three} />
                <h4>Gulzar Sampath</h4>
                <p>Email estimates and job confirmations to customers, eSign documents, plus and more.</p>
              </Col>
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row className="text-center">
              <Col md={4}>
                <img src={One} />
                <h4>Gulzar Sampath</h4>
                <p>Email estimates and job confirmations to customers, eSign documents, plus and more.</p>
              </Col>
              <Col md={4}>
                <img src={Two} />
                <h4>Gulzar Sampath</h4>
                <p>Email estimates and job confirmations to customers, eSign documents, plus and more.</p>
              </Col>
              <Col md={4}>
                <img src={Three} />
                <h4>Gulzar Sampath</h4>
                <p>Email estimates and job confirmations to customers, eSign documents, plus and more.</p>
              </Col>
            </Row>
          </Carousel.Item>

        </Carousel>
      </Container> */}

      <ClientStory />

      <Container fluid className="works_sec text-center py-3">
        <Container>
          <h4 className="title">How it Works</h4>
          <p className="short-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>

          <Row className="my-5">
            <Col md={4} className="text-center">
              <div className="get-service">
                <div className="box">1</div>
                <img src={YourRequest} />
                <h4>Your Request</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>

              </div>
            </Col>
            <Col md={4} className="text-center">
              <div className="get-service">
                <div className="box">2</div>
                <img src={PickService} />
                <h4>Pick Service</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>

              </div>
            </Col>
            <Col md={4} className="text-center">
              <div className="get-service">
                <div className="box">3</div>
                <img src={GetService} />
                <h4>Get Service</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>

              </div>
            </Col>
          </Row>

        </Container>
      </Container>


      <Container fluid className="technical-service">
        <Container>
          <Row className='py-5'>
            <Col md={5} className='d-flex align-items-center justify-content-end'>
              <img src={ProfassionalImg} />
            </Col>
            <Col md={7} className='about'>
              <h4>About Us</h4>
              <h3>Professional technical<br />Service Now in your Budget.</h3>
              <ul className='my-3'>
                <li>
                  <p className='title'>Lorem Ipsum</p>
                  <p className='data'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </li>
                <li>
                  <p className='title'>Lorem Ipsum</p>
                  <p className='data'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </li>
              </ul>
              <CustomButton label="FREE DEMO" />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className='why-choose my-5'>
        <Row>
          <Col md={6}>
            <h4>Why Choose Us</h4>
            <h2>Technician you can trust<br />for your electrical needs</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum has been the industry's standard dummy text ever since the</p>
            <ul>
              <li>
                <p className='title'>
                  <img src={ProfassionalIcon} />
                  Affordable Price
                </p>
                <p className='data'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
              </li>
              <li>
                <p className='title'>
                  <img src={ProfassionalIcon} />
                  Professional team
                </p>
                <p className='data'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
              </li>
              <li>
                <p className='title'>
                  <img src={ProfassionalIcon} />
                  24/7 Support
                </p>
                <p className='data'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <h4>Contact Us</h4>
            <form onSubmit={eMaintain}>
              <h2>Do you Need Help With<br />Electrical Maintenance?</h2>
              <input type='text' placeholder='Name' required/>
              <input type='email' placeholder='Enter a Valid Email Address' required/>
              <textarea placeholder='Enter You Message' required/>

              <button type="submit">Submit</button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  )
}
