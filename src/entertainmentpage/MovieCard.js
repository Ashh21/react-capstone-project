import React from 'react'
import { IMG_CDN_URL } from '../utils/Constants'


const MovieCard = ({ movies }) => {
    return (
        <div className='movie-card'>
            {
                movies?.slice(0, 4)?.map(movie =>
                    <img className='movie-img' alt="Movie Card" src={IMG_CDN_URL + movie?.poster_path} />
                )
            }
        </div>
    )
}

export { MovieCard }