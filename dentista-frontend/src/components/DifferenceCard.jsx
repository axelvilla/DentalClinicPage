import React from 'react'

const DifferenceCard = ({titulo, body, link}) => {
  return (
    <div class="container">
        <div class="px-2 d-flex text-center">
            <div class="card-body">
                <h5 class="card-title pb-3 fw-bold">{titulo}</h5>
                <p class="card-text text-wrap">"{body}"</p>
                <a href="{link}" class="btn btn-outline-primary">Saber mas</a>
            </div>
        </div>
    </div>
  )
}

export default DifferenceCard