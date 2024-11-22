import React from 'react'

const DifferenceCard = ({titulo, body, link}) => {
  return (
    <div className="container">
        <div className="px-2 d-flex text-center">
            <div className="card-body">
                <h5 className="card-title pb-3 fw-bold">{titulo}</h5>
                <p className="card-text text-wrap">"{body}"</p>
                <a href="{link}" className="btn btn-outline-primary">Saber mas</a>
            </div>
        </div>
    </div>
  )
}

export default DifferenceCard