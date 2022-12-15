import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ScreenBanner } from '../components/ScreenBanner'
import { PricingBox } from '../components/PricingBox'



export const Pricing = () => {
  return (
    <>
      <ScreenBanner title='Pricing' para='Choose the right plan for your business' />

      <Container>
        <Row className='text-center'>
        <Col md={1}></Col>
          <Col md={5}>
          <PricingBox type="FREE" price="Free for" days="14 Days" info="No credit card required." />

          </Col>
          <Col md={5}>
          <PricingBox type="STANDARD" price="$47/" days="month" one="Unlimited users" two="Unlimited Workorders" three="Manage Customers"/>

          </Col>
          <Col md={1}></Col>
        </Row>
                        
      </Container>
    </>
  )
}
