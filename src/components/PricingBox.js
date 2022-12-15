import React from 'react'
import { CustomButton } from './buttons/CustomButton'

export const PricingBox = (props) => {

  

  return (
    <>
      <div className='price-box'>
        <h4>{props.type}</h4>
        <h2>{props.price}</h2>
        <p className='days'>{props.days}</p>
        <div className='info'>
          {
            props.info ?
              <p>{props.info}</p> :
              ''
          }
          <ul>

            {
              props.one ?
                <li>{props.one}</li>:
                ''
            }
            {
              props.two ?
                <li>{props.two}</li>:
                ''
            }
            {
                props.three ?
                  <li>{props.three}</li>:
                  ''
              }
          </ul>
        </div>

        <CustomButton label='Subscribe' />
      </div>
    </>
  )
}
