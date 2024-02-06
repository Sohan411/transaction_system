import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom'; // Assuming you are using React Router

const Mode2 = () => {
  const [formData, setFormData] = useState({
    account_number: '',
    amount: '',
    pin: '',
    ifsc_code: ''
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/debitMoney', formData);
      console.log(response.data);
      alert("Transaction Successful")
      setTimeout(() => {
        navigate('/modes')
      }, 200);
    } catch (error) {
      console.error('Error debiting money:', error);
      alert("Transaction Failed");
      setTimeout(() => {
        navigate('/modes')
      }, 200);
    }
  };

  
  return (
    <>
      {/* Your Navbar component */}
      <div className='my-5'>
        <h3 className='text-center'>Please Enter Following Details</h3>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <div>
              <form className='border border-2 p-5 border-black rounded-4'>
                <div className="mb-3">
                  <label htmlFor="accountNumber" className="form-label">Account No</label>
                  <input type="number" className="form-control" id="accountNumber" name="account_number" value={formData.account_number} onChange={handleChange} placeholder="Enter Your Account No." />
                </div>
                <div className="mb-3">
                  <label htmlFor="ifscCode" className="form-label">IFSC code</label>
                  <input type="text" className="form-control" id="ifscCode" name="ifsc_code" value={formData.ifsc_code} onChange={handleChange} placeholder="Enter IFSC" />
                </div>
                <div className="mb-3">
                  <label htmlFor="amount" className="form-label">Amount </label>
                  <input type="number" className="form-control" id="amount" name="amount" value={formData.amount} onChange={handleChange} placeholder="Enter Amount" />
                </div>
                <div className="mb-3">
                  <label htmlFor="pin" className="form-label">PIN</label>
                  <input type="password" className="form-control" id="pin" name="pin" value={formData.pin} onChange={handleChange} placeholder="Please Enter Your PIN" />
                </div>
                <div className=' mt-5 text-center'>
                  <button className='btn-get-started  px-5 py-3' onClick={handleSubmit}>Withdraw</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mode2;