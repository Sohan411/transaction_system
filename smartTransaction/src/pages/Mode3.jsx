import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'

const Mode3 = () => {
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
                  <NavLink to="" className='btn-get-started  px-5 py-3'>Verify Your OTP</NavLink>

                </div>


                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Amount</label>
                  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Please Enter Amount " />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">PIN</label>
                  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Please Enter Your OTP as a PIN & Click on Withdraw" />
                </div>
                <div className=' mt-5 text-center'>
                  <NavLink to="" className='btn-get-started  px-5 py-3'>Withdraw</NavLink>
                </div>
              </form>
            </div>

          </div>

        </div>

      </div>

    </>

  )
}

export default Mode3