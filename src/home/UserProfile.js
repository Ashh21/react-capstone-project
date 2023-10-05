import React from 'react'
import img15 from "../images/image 15.png"

const UserProfile = () => {
    const data = JSON.parse(localStorage.getItem("data") || {})
    const selectedCategory = JSON.parse(localStorage.getItem("selectedCategory"))
    return (
        <>
            <div className='img-div'>
                <img src={img15} alt='logo' />
            </div>
            <div className='data-div'>
                <div className='data-div1'>
                    <h1>{data.name}</h1>
                    <h1>{data.email}</h1>
                    <h1 className='username'>{data.userName}</h1>
                </div>
                <div className='home-choice-div'>
                    {
                        selectedCategory.map(category =>
                            <div className='home-choice-card' key={category.id}> {category.title}</div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export { UserProfile }