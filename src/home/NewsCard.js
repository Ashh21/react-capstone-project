import React, { useEffect, useState } from 'react'

const NewsCard = () => {
    const [newsData, setNewsData] = useState("")

    useEffect(() => {
        try {
            const fetchData = async () => {
                const data = await fetch("https://newsdata.io/api/1/news?apikey=pub_31353df17a9dc5ae288e976e834ff4579ab23&q=pegasus&language=en")
                const json = await data.json();
                setNewsData(json?.results[4])
                console.log(json)
            }
            fetchData()
        }
        catch (e) {

        }
    }, [])

    return (
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
    )
}

export { NewsCard }