import React from 'react'
import Back from './Back'
import Search from './Search'

const Header = () => {
    return (
        <div className="row top-search-section">
            <Back/>
            <Search/>
        </div>
    )
}

export default Header
