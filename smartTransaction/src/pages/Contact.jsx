import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'


const Contact = () => {
  return (
    <>
    <Navbar/>
      <div className='my-5'>
        <h1 className='text-center'>Contact US</h1>

      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Full Name" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Phone </label>
                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Mobile Number" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Address</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Address" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Please Mention Your Query Here</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className=' mt-5 text-center'>
                  <NavLink to="" className='btn-get-started  px-5 py-3'>Submit</NavLink>
                </div>
            </form>

          </div>

        </div>

      </div>
    </>


  )
}

export default Contact