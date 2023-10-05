import React, { useState } from 'react'
import "./Home.css"
import { UserProfile } from './UserProfile'


const Home = () => {
    const [inputValue, setInputValue] = useState("")

    return (
        <div class="grid-container">
            <section class="grid-item a">
                <UserProfile />
            </section>
            <div class="grid-item b" >
                <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
            </div>
            <div class="grid-item c">C</div>
            <div class="grid-item d">D</div>
            <div class="grid-item e">E</div>
        </div>
    )
}

export { Home };