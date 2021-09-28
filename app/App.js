import React, { useState } from 'react'

import Dishes from './components/Dishes'
import Header from './components/Header'
import Stories from './components/Stories'
import ToggleBar from './components/ToggleBar'



const App = () => {
    const [isVeg, setIsVeg] = useState(false)
    const [includesEgg, setIncludesEgg] = useState(false)
    return (
        <>
            <div className="container">
                <Header />
                <Stories />

            </div>


            {/* Start of Bottom section */}
            <section>
                <ToggleBar
                    isVeg={isVeg}
                    setIsVeg={setIsVeg}
                    includesEgg={includesEgg}
                    setIncludesEgg={setIncludesEgg}
                />
                <Dishes
                    isVeg={isVeg}
                    includesEgg={includesEgg} />
            </section>
        </>
    )
}

export default App
