import React, { useState } from 'react'
import "./Home.css"
import { UserProfile } from './UserProfile'
import { WeatherCard } from './WeatherCard'
import { NotesCard } from './NotesCard'


const Home = () => {

    return (
        <div class="grid-container">
            <section class="grid-item a">
                <UserProfile />
            </section>
            <div class="grid-item b" >
                <NotesCard />
            </div>
            <div class="grid-item c">C</div>
            <div class="grid-item d">
                <WeatherCard />
            </div>
            <div class="grid-item e">E</div>
        </div>
    )
}

export { Home };