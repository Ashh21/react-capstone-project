import React, { useEffect, useState } from 'react'
import "./Home.css"
import { UserProfile } from './UserProfile'
import { WeatherCard } from './WeatherCard'
import { NotesCard } from './NotesCard'
// import { NewsCard } from './NewsCard'
import { useNavigate } from 'react-router-dom'
import { TimerCard } from './TimerCard'


const Home = () => {
    const navigate = useNavigate()
    const [newsData, setNewsData] = useState("")

    useEffect(() => {
        try {
            const fetchData = async () => {
                const data = await fetch("https://newsdata.io/api/1/news?apikey=pub_31353df17a9dc5ae288e976e834ff4579ab23&q=pizza")
                const json = await data.json();
                setNewsData(json?.results[7])
                console.log(json)
            }
            fetchData()
        }
        catch (e) {

        }
    }, [])
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
                {/* <NewsCard /> */}
                <div className='news'>
            <div className='news-img-div'>
                <img className='news-img' src={newsData?.image_url} alt="logo" />
                <div className='news-title-div'>
                    <h1>{newsData?.title}</h1>
                    <p> {newsData?.pubDate} </p>
                </div>
            </div>
            <div className='new-content-div'>
                <h3> {newsData?.content?.split("...")?.[0]} ... </h3>
            </div>
        </div>
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