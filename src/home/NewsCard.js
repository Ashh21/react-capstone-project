import React, { useEffect, useState } from 'react'

const NewsCard = () => {
    const [newsData, setNewsData] = useState("")

    useEffect(() => {
        try {
            const fetchData = async () => {
                const data = await fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=5254bca862424dbab3b1e00e2802f33e")
                const json = await data.json();
                setNewsData(json?.articles[2])
                console.log(newsData)
            }
            fetchData()
        }
        catch (e) {

        }
    }, [])


    return (
        <div className='news'>
            <div className='news-img-div'>
                <img className='news-img' src={newsData?.urlToImage} alt="logo" />
                <div className='news-title-div'>
                    <h1>{newsData?.title}</h1>
                    <p> {newsData?.publishedAt} </p>
                </div>
            </div>
            <div className='new-content-div'>
                <h3> {newsData?.content?.split("...")?.[0]} ... </h3>
            </div>
        </div>
    )
}

export { NewsCard }