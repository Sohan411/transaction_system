import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'

const Mode4 = () => {
  return (
   <>
   <Navbar />
      <div className='my-5'>
        <h3 className='text-center'>Please Enter Following Details</h3>

      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <div >
              <form className='border border-2 p-5 border-black rounded-4 '>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Mobile Number</label>
                  <input type="Number" className="form-control" id="exampleFormControlInput1" placeholder="Please Enter Your Mobile No." />
                </div>
                <div className=' mt-5 text-center'>
                  <NavLink to="" className='btn-get-started  px-5 py-3'>Verify Your Mobile Number</NavLink>

                </div>


                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Enter OTP</label>
                  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Please Enter OTP " />
                </div>
                <div className=' mt-5 text-center'>
                  <NavLink to="" className='btn-get-started  px-5 py-3'>Verify OTP </NavLink>

                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Amount</label>
                  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Please Enter Amount " />
                </div>
                
                <div className=' mt-5 text-center'>
                  <NavLink to="" className='btn-get-started  px-5 py-3'>Generate QR</NavLink>
                </div>
              </form>
            </div>

          </div>

        </div>

      </div>

   
   
   </>
  )
}

export default Mode4