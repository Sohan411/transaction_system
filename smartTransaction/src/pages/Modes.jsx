import React from 'react'
import Card from '../components/Card'
import Data from '../Constant'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import mode1 from '../assets/mode1.jpg'
import mode2 from '../assets/mode2.jpg'
import mode3 from '../assets/mode3.jpg'
import mode4 from '../assets/mode4.jpg'


const Modes = () => {

  let navigate = useNavigate()
  return (
    <>
      <Navbar />
      <Outlet />
      <div className='my-5'>
        <h1 className='text-center'>Payment Methods</h1>
      </div>
      <div className='container-fluid mb-5 '>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row gy-3'>
              {/* {
                Data.map((value , index) => {
                  return <Card key={index}
                  imgsrc={value.imgsrc}
                  title={value.title}
                  discription ={value.discription}
                  thumb={value.thumb}
                  />
                })
              } */}
              <div className='col-md-3 col-10 mx-auto'>
                <div className="card">
                  <img className='modeImg' src={mode1} class="card-img-top" alt="..." />
                  <div className="card-body d-flex justify-content-center flex-column">
                    <h5 className="card-title">Transaction Mode-1</h5>
                    <p className="card-text">Enter The Debit Card Number And Password</p>
                    <button onClick={() => navigate('/mode1')} to="" className="btn btn-primary ">Click for Mode-1</button>
                  </div>
                </div>
              </div>

              <div className='col-md-3 col-10 mx-auto'>
                <div className="card">
                  <img className='modeImg' src={mode2} class="card-img-top" alt="..." />
                  <div className="card-body d-flex justify-content-center flex-column">
                    <h5 className="card-title">Transaction Mode-2</h5>
                    <p className="card-text">Enter The Account Number ,IFSC Code And Password</p>
                    <button onClick={() => navigate('/mode2')} to="" className="btn btn-primary ">Click for Mode-2</button>
                  </div>
                </div>
              </div>

              <div className='col-md-3 col-10 mx-auto'>
                <div className="card">
                  <img className='modeImg' src={mode3} class="card-img-top" alt="..." />
                  <div className="card-body d-flex justify-content-center flex-column">
                    <h5 className="card-title">Transaction Mode-3</h5>
                    <p className="card-text">Enter Your Mobile Number And Use OTP as a Password</p>
                    <button onClick={() => navigate('/mode3')} to="" className="btn btn-primary ">Click for Mode-3</button>
                  </div>
                </div>
              </div>

              <div className='col-md-3 col-10 mx-auto'>
                <div className="card">
                  <img className='modeImg' src={mode4} class="card-img-top" alt="..." />
                  <div className="card-body d-flex justify-content-center flex-column">
                    <h5 className="card-title">Transaction Mode-4</h5>
                    <p className="card-text">Scan QR Code And  withdraw Your Money Within a Seconds</p>
                    <button onClick={() => navigate('/mode4')} to="" className="btn btn-primary ">Click for Mode-4</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modes