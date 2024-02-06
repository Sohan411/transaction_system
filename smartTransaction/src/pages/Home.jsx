import React from 'react'
import homeImage from '../assets/Image1.png'
import { NavLink } from 'react-router-dom'
import Common from '../components/common'
import Contact from './Contact'
import Navbar from './Navbar';

const Home = () => {
  return (
<>
<Navbar/>
    
    <Common
    name="Welcome to world Best Payment Platform"
    heading=""
    imgsrc={homeImage}
    visit="/modes"
    btnName="Choose Your Payment Mode"
    />
</>

    
    

    


  )
}

export default Home