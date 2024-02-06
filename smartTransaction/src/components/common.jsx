import React from 'react'
import homeImage from '../assets/Image1.png'
import { NavLink } from 'react-router-dom'

const Common = (props) => {
  return (
    //<section id='header' className='justify-content-center'>
    <div className="main">
      <div className='container-fluid nav_bg '>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row content'>
              <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                <h1>{props.name} <strong className='brand-name'> Smart Transaction System</strong></h1>
                <h4 className='my-2'>
                  {props.heading}
                </h4>
                <div className='mt-5'>
                  <NavLink to={props.visit} className='btn-get-started'>{props.btnName}</NavLink>
                </div>
              </div>

              <div className='col-lg-6 order-1 order-lg-2 header-img'>
                <img src={props.imgsrc} className='img-fluid animated' alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Common