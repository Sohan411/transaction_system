import React from 'react'
import Common from '../components/common'
import homeImage from '../assets/Image2.png'
import Footer from '../components/footer'
import Navbar from './Navbar'

const About = () => {
  return (
   <>
   <Navbar/>
   <Common
   heading="Our mission is to give revolutionize way of transactions are conducted, making them smarter, more secure, and seamlessly integrated into the fabric of everyday life. We are committed to creating a world where financial interactions are efficient, transparent, and accessible to everyone."
   imgsrc={homeImage}
   visit="/contact"
   btnName="Contact Us"
   />
   <Footer/>
   </>
  )
}

export default About