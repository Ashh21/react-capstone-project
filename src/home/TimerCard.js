import React, { useState } from 'react'
import up from '../images/Vector (1).png'
import down from '../images/Vector.png'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const TimerCard = () => {
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)

    const timerHandler = () => {
        setIsPlaying(true)
    }

    const incrementHour = () => {
        setHours(hours + 1)
    }

    const decrementHour = () => {
        setHours(hours - 1)
    }

    const incrementMinutes = () => {
        setMinutes(minutes + 1)
    }

    const decrementMinutes = () => {
        setMinutes(minutes - 1)
    }

    const incrementSeconds = () => {
        setSeconds(seconds + 1)
    }

    const decrementSeconds = () => {
        setSeconds(seconds - 1)
    }

    return (
        <div className='timer'>
            <div className='stop-watch'>
                <CountdownCircleTimer
                    isPlaying={isPlaying}
                    duration={7}
                    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[7, 5, 2, 0]}
                >
                    {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
            </div>

            <div className='timer-div'>
                <div className='time-set-div'>
                    <div className='colon' >
                        <div className='hours'>
                            <h4 className='h4'>Hours</h4>
                            <img className='inCrBtn' onClick={incrementHour} src={up} alt='icon' />
                            <span>{hours}</span>
                            <img className='decrBtn' onClick={decrementHour} src={down} alt='icon' />
                        </div>
                        <div className='colon-div'>:</div>
                    </div>
                    <div className='colon'>
                        <div className='minutes'>
                            <h4 className='h4'>Minutes</h4>
                            <img className='inCrBtn' onClick={incrementMinutes} src={up} alt='icon' />
                            <span> {minutes} </span>
                            <img className='decrBtn' onClick={decrementMinutes} src={down} alt='icon' />
                        </div>
                        <div className='colon-div'>:</div>
                    </div>
                    <div className='seconds'>
                        <h4 className='h4'>Seconds</h4>
                        <img className='inCrBtn' onClick={incrementSeconds} src={up} alt='icon' />
                        <span> {seconds} </span>
                        <img className='decrBtn' onClick={decrementSeconds} src={down} alt='icon' />
                    </div>
                </div>
                <div className='start-btn-div'>
                    <button onClick={timerHandler}>Start</button>
                </div>
            </div>
        </div>
    )
}

export { TimerCard }