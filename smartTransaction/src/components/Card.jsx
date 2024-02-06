import React from 'react'
import mode1 from '../assets/mode1.jpg'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Card = (props) => {
    let navigate = useNavigate()

    return (
        <>
           <div className='col-md-3 col-10 mx-auto'>
                <div className="card">
                    <img className='modeImg' src={props.imgsrc} class="card-img-top" alt="..." />
                    <div className="card-body d-flex justify-content-center flex-column">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.discription}</p>
                        <button onClick={()=> navigate('/mode1') } to="" className="btn btn-primary ">{props.thumb}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card