import React from 'react'
import Img1 from '../assets/offers.png'
import Img2 from '../assets/stars.png'

const OffersStars = () => {
    return (
        <div className="card mt-4 offer-card">
        <div className="card-body ">
            <div className="col-6 d-flex p-0 image-section ">
                <img src={Img1} className="offer-image" />
                <p className="offer-text">Offers</p>
            </div>
            <div className="col-6 d-flex p-0">
                <img src={Img2} className="offer-image" />
                <p className="star-text">Stars</p>
            </div>
        </div>
    </div>
    )
}

export default OffersStars
