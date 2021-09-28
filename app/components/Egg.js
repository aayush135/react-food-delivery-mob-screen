import React from 'react'

const Egg = (props) => {
    return (
        <div className="col-7">
            <div className="custom-control custom-switch">
                <label className="switch">
                    <input type="checkbox" onChange={(e) => props.setIncludesEgg(e.target.checked)} />
                    <span className="slider round"></span>
                </label>
                {/* <input type="checkbox" className="custom-control-input" onChange={(e) => props.setIncludesEgg(e.target.checked)} /> */}
                <label className="" >Include Egg</label>
            </div>
        </div>
    )
}

export default Egg
