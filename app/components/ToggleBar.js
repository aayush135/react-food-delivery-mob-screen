import React from 'react'
import Egg from './Egg'
import Nonveg from './Nonveg'

const ToggleBar = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 category-section">
                    <div className="row">
                        <Nonveg
                            isVeg={props.isVeg}
                            setIsVeg={props.setIsVeg}

                        />
                        <Egg
                            includesEgg={props.includesEgg}
                            setIncludesEgg={props.setIncludesEgg}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToggleBar
