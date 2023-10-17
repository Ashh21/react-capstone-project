import React, { useEffect, useState } from 'react'
import vector3 from '../images/Vector (3).png'
import vector2 from '../images/Vector (2).png'
import vector4 from '../images/Vector (4).png'
import group from '../images/Group.png'
import line from '../images/Line 2.png'


const WeatherCard = () => {
    const [weatherData, setWeatherData] = useState(null)
    useEffect(() => {
        try {
            const fetchData = async () => {
                const data = await fetch("http://api.weatherapi.com/v1/current.json?key=e5f237647d59474688f134736230510&q=Delhi, india&aqi=no")
                const json = await data.json();
                setWeatherData(json);
                console.log(json)
            }
            fetchData()
        } catch (e) {

        }
    }, [weatherData])
    return (
        <div className='weather-card'>
            <div className='date-div'>
                {weatherData?.location?.localtime}
            </div>
            <div className='bottom' >
                <div className='rain-div'>
                    <img src={vector3} alt='logo' />
                    {weatherData?.current?.precip_mm}
                </div>

                <div className='line'>
                    <img src={line} alt="logo" />
                </div>

                <div className='temp-div'>
                    <div className='temperature'> {weatherData?.current?.temp_c + " °C "}</div>
                    <div className='temp'>
                        <div><img src={vector2} alt="logo" /></div>
                        {weatherData?.current?.pressure_mb + " mbar"}
                    </div>
                    <div className='pressure'>Pressure</div>
                </div>

                <div className='line'>
                    <img src={line} alt="logo" />
                </div>

                <div className='wind '>
                    <div className='wind-div'>
                        <img src={vector4} alt="logo" />
                        <div className='wind-div2'>
                            <div> {weatherData?.current?.wind_kph + " km/h"} </div>
                            <div>Wind</div>
                        </div>
                    </div>

                    <div className='humidity'>
                        <div className='humidity-div'>
                            <img src={group} alt="logo" />
                            <div className='humidity-div2'>
                                <div> {weatherData?.current?.humidity + " %"} </div>
                                <div> Humidity</div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export { WeatherCard }