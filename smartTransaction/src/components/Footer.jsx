import React from 'react'
import gaurav from '../assets/Gaurav.jpg'
import ashish from '../assets/Ashish.jpg'
import sanket from '../assets/Sanket.jpg'
import sakshi from '../assets/Sak.jpg'


const Footer = () => {
    return (

        <div className='container-fluid nav_bg'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div className='mt-5'>
                        <h1 className='cardPostName'>Our Team</h1>
                        <h5 className='cardPostSecondName'>Meet The Members Behind Smart Transaction System Using MERN Stack</h5>
                    </div>

                    <div>
                        <div className='mt-5'>
                            <div className='d-flex gap-5 imageContainer justify-content-between'>
                                <div className='mt-5 d-flex '>
                                    <img className='photo ' src={gaurav} alt="Gimg" />
                                    <div className='ms-5 mt-2'>
                                        <h2 >
                                            Gaurav Nagose
                                        </h2>
                                        <h4 className='cardPost'>Project Member</h4>
                                        <p className='pt-3 cardPostPara'>
                                            Gaurav Nagose is an Experience <br /> web designer with Expertise in <br /> implementing technology based <br /> solution.
                                        </p>
                                    </div>
                                </div>
                                <div className='mt-5 d-flex '>
                                    <img className='photo ' src={ashish} alt="Gimg" />
                                    <div className='ms-5 mt-2'>
                                        <h2 >
                                            Ashish Ranjan
                                        </h2>
                                        <h4 className='cardPost'>Project Member</h4>
                                        <p className='pt-3 cardPostPara'>
                                            Ashish Ranjan is an Experience <br /> web designer with Expertise in <br /> Frontend technology.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex gap-5 imageContainer justify-content-between'>
                                <div className='mt-5 d-flex '>
                                    <img className='photo ' src={sanket} alt="Gimg" />
                                    <div className='ms-5 mt-2'>
                                        <h2 >
                                            Sanket Dorle
                                        </h2>
                                        <h4 className='cardPost'>Project Member</h4>
                                        <p className='pt-3 cardPostPara'>
                                            Sanket Dorle is an Experience <br /> Hardware Engineer he  is expert <br />in design circuits and integration
                                        </p>
                                    </div>
                                </div>
                                <div className='mt-5 d-flex '>
                                    <img className='photo ' src={sakshi} alt="Gimg" />
                                    <div className='ms-5 mt-2'>
                                        <h2 >
                                            Sakshi Chavhan
                                        </h2>
                                        <h4 className='cardPost'>Group Leader</h4>
                                        <p className='pt-3 cardPostPara'>
                                            Sakshi Chavhan has immense <br />experience  in research and <br />development
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='pt-5'>
                        <hr />
                        <p className='pt-5'>Mobile No:- 9370870148 , Email-id:- gaurav.nagose09@gmail.com  , Address:- Priyadarshini college of Engineering ,Nagpur , Guided By :- Dr S.P Washimkar Mam</p>

                        <p> <span>&#169;</span> Copyright All rights are reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer