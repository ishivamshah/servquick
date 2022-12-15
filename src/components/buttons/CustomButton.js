import React from 'react'
import Button from 'react-bootstrap/Button';

export const CustomButton = (props) => {
  return (
    <>
    <Button variant="primary">{props.label}</Button>
    </>
  )
}
