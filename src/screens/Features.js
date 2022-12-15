import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AddWorkOrder from '../assets/images/add-work-order.png'
import AddWorkOrder1 from '../assets/images/add-work-order1.png'
import AddWorkOrder2 from '../assets/images/add-work-order2.png'
import AddWorkOrder3 from '../assets/images/add-work-order3.png'
import AddWorkOrder4 from '../assets/images/add-work-order4.png'
import AddWorkOrder5 from '../assets/images/add-work-order5.png'
import { ScreenBanner } from '../components/ScreenBanner'

export const Features = () => {
  return (
    <>
    <ScreenBanner title="Features"/>

    <Container className='features-content'>
      <Row className='d-flex justify-content-center align-items-center'>
        <Col md={5} className='my-3'>
          <h2>A dashboard that shows information relevant to users.</h2>
          <p>Our team developed clear dashboards to provide an overview of operations. For the managers, it shows the total machines installed by the company, open orders in a month, total orders, etc.</p>
        </Col>
        <Col md={7} className='my-3'>
          <img src={AddWorkOrder} />
        </Col>

        <Col md={7} className='my-3'>
          <img src={AddWorkOrder1} />
        </Col>
        <Col md={5} className='my-3'>
          <h2>Create order</h2>
          <p>An essential feature for work order management. In CJJ ventures, all three sets of users can create orders. Though customers only have access to a mobile app, and either technician or manager can add new customers.</p>
        </Col>

        <Col md={5} className='my-3'>
          <h2>Job scheduling</h2>
          <p>Available only to managers, they can assign technicians' work according to territory, machine, and work type. In case if something happens with a technician on the way because of the vehicle or some other reason, quick rescheduling will make sure customer’s issues are resolved anyhow.</p>
        </Col>
        <Col md={7} className='my-3'>
          <img src={AddWorkOrder2} />
        </Col>

        <Col md={7} className=''>
          <img src={AddWorkOrder3} />
        </Col>
        <Col md={5} className=''>
          <h2>Comprehensive details on work orders</h2>
          <p>Managers can go through more information like a list of technicians, work order types, location list, etc. In contrast, the technicians’ portal doesn’t include as many options managers have to view work orders. It is limited to work orders concerning specific technicians.</p>
        </Col>

        <Col md={5} className='my-3'>
          <h2>Smart notifications and messaging</h2>
          <p>Customers and technicians are notified via text messages and push notifications whenever a new work order is created or completed; a job is rescheduled, remarks are updated, payment is received, etc.</p>
        </Col>
        <Col md={7} className='my-3'>
          <img src={AddWorkOrder4} />
        </Col>

        <Col md={7} className='my-3'>
          <img src={AddWorkOrder5} />
        </Col>
        <Col md={5} className='my-3'>
          <h2>Search work orders</h2>
          <p>Search feature to find historical work orders. Search works on broad parameters like date, technician, and status - whether pending, approved, in progress, completed, or closed.</p>
        </Col>


      
      </Row>
    </Container>
    </>
  )
}



