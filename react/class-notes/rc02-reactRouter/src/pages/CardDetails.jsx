import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'


import data from "../data.js"
const CardDetails = () => {

const {namee} =useParams()

const navigate=useNavigate()

//namee=CSS
  return (
    <div className='container text-center mt-4'>
      {data.map(
        ({ name, text, yorum, id, img }) =>
          name === namee && (
            <div key={id}>
              <h3>{name}</h3>
              <img src={img} alt="" width="300px" />
              <h3>{text} </h3>
              <h4>{yorum} </h4>
              <div>
                <button
                  className="btn btn-warning"
                  onClick={()=>navigate(-1)}
                >
                  GO BACK
                </button>
               
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default CardDetails