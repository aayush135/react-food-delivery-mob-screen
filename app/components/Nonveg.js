import React from 'react'

const Nonveg = (props) => {

    const handleChange = e => {
        console.log('Nonveg', e)
    }
    return (
        <div className="col-5">
            <div className="custom-control custom-switch">
                <label className="switch">
                    <input type="checkbox" onChange={(e) => props.setIsVeg(e.target.checked)} />
                    <span className="slider round"></span>
                </label>
                {/* <input type="checkbox" className="custom-control-input" onChange={(e) => props.setIsVeg(e.target.checked)} /> */}
                <label className="" >Veg Only</label>
            </div>
        </div>
    )
}

export default Nonveg
