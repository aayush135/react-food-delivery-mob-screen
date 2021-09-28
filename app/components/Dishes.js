import React, { useEffect } from 'react'
import Dish from './Dish'

import OffersStars from './OffersStars'

const Dishes = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <OffersStars />
                </div>
            </div>
            <Dish
                isVeg={props.isVeg}
                includesEgg={props.includesEgg}
            />
        </div>

    )
}

export default Dishes
