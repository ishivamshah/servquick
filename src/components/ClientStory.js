import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import One from '../assets/images/Ellipse-slider.png'
import Two from '../assets/images/Ellipse-169.png'
import Three from '../assets/images/Ellipse-170.png'
import Question from '../assets/images/qustion-mark.png'

export const ClientStory = () => {
  return (
    <>
    <Container fluid className="sec4">
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
      </Container>
    </>
  )
}
