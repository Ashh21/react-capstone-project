import React, { } from 'react'
import "./Home.css"
import { UserProfile } from './UserProfile'
import { WeatherCard } from './WeatherCard'
import { NotesCard } from './NotesCard'
import { NewsCard } from './NewsCard'
import { useNavigate } from 'react-router-dom'
import { TimerCard } from './TimerCard'


const Home = () => {
    const navigate = useNavigate()
    const browseBtnHandler = () => {
        navigate("/entertainmentPage")
    }

    return (
        <div class="grid-container">
            <section class="grid-item a">
                <UserProfile />
            </section>
            <div class="grid-item b" >
                <NotesCard />
            </div>
            <div class="grid-item c">
                <NewsCard />
            </div>
            <div class="grid-item d">
                <WeatherCard />
            </div>
            <div class="grid-item e">
                <TimerCard />
            </div>
            <button onClick={browseBtnHandler} className='browse-btn'> browse</button>
        </div>
    )
}

export { Home };