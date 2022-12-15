import React from 'react'
import { Container } from 'react-bootstrap'

export const ScreenBanner = (props) => {
  return (
    <>
    <Container fluid className='screen-banner d-grid justify-content-center align-items-center text-center'>
    <h1>{props.title}</h1>
    <p>{props.para}</p>
    </Container>
    </>
  )
}
