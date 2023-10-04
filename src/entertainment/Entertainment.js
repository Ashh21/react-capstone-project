import React, { useState } from 'react'
import "./Entertainment.css"
import { jsonData } from './Data'
import { useNavigate } from 'react-router-dom'

const Entertainment = () => {
    const [selectedCategory, setSelectedCategory] = useState([])
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const clickHandler = (category) => {
        const updateSelectedCategory = selectedCategory.includes(category)
            ? selectedCategory.filter(c => c !== category)
            : [...selectedCategory, category]
        setSelectedCategory(updateSelectedCategory)
    }

    const removeHandler = (category) => {
        const updateItem = selectedCategory.filter(c => c.id !== category.id)
        setSelectedCategory([...updateItem])
    }

    const nextButton = () => {
        localStorage.setItem('selectedCategory', JSON.stringify(selectedCategory))
        const updateError = selectedCategory.length < 3
            ? "Minimum 3 category required"
            : (navigate("/home"), "")
        setError(updateError);
    }

    // const borderStyle = selectedCategory.find(c => c !== ) ? " 2px solid #11B800" : "";

    return (
        <div className='container'>
            <div className='container-1'>
                <div className='text'>
                    <h2>Super app</h2>
                    <h1>Choose your  </h1>
                    <h1>entertainment</h1>
                    <h1>category</h1>
                </div>
                <div className='choices'>
                    {
                        selectedCategory.map(category =>
                            <div className='choices-div'
                                key={category.id}>
                                <div >{category.title}</div>
                                <span onClick={() => removeHandler(category)}>X</span>
                            </div>
                        )}
                </div>
                <div className='error'>
                    {error}
                </div>
            </div>
            <div className='container-2'
            >
                {jsonData.map
                    ((card) => (
                        <div className='card' key={card.id} onClick={() => clickHandler(card)}
                            style={{ backgroundColor: card.backgroundColor }}
                        >
                            <h3>{card.title}</h3>
                            <img src={card.imgUrl} alt='icon' />
                        </div>
                    ))}

                <button onClick={() => nextButton()} className='next-btn'>Next Page</button>
            </div>

        </div >
    )
}

export { Entertainment }