import './EntertainmentPage.css'
import logo from '../images/image 14.png'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { MovieCard } from './MovieCard'
import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/Constants'
import { useDispatch } from 'react-redux'
import { addPlayingMovies } from '../redux/movieSlice';


const EntertainmentPage = () => {
    
    const navigate = useNavigate()
    const movies = useSelector(store => store?.movies?.playingMovies)
    const selectedCategory = JSON.parse(localStorage.getItem("selectedCategory"))
    console.log(selectedCategory)

    const clickHandler = () => {
        navigate('/home')
    }

    const dispatch = useDispatch();

    useEffect(() => {
        const FetchData = async () => {
            try {
                const data = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', API_OPTIONS)

                const json = await data.json();
                dispatch(addPlayingMovies(json.results))

            }
            catch (e) {
                console.log(e)
            }
        }
        FetchData()
    }, [])


    return (
        <div className='entertainment-div'>
            <div className='header'>
                <div className='heading'>
                    <h1>Super app</h1>
                </div>
                <div className='header-img'>
                    <img onClick={clickHandler} src={logo} alt='logo' />
                </div>
            </div>
            <div className='short-des'>
                <h4>Entertainment according to your choice</h4>
            </div>

            {
                selectedCategory.map((category,) =>
                    <div className='movie-cards' key={category.id}>
                        <div className='movie-title' >
                            <h4>{category.title}</h4>
                            <div className='movie-card-div' >
                                <MovieCard movies={movies} />
                            </div>
                            {console.log(movies)}
                        </div>
                    </div>)
            }

        </div>
    )
}

export { EntertainmentPage }