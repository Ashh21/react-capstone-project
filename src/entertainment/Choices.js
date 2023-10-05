import React from 'react'

const Choices = ({ selectedCategory, setSelectedCategory, category }) => {
    const removeHandler = () => {
        const updateItem = selectedCategory.filter(c => c.id !== category.id)
        setSelectedCategory([...updateItem])
    }
    return (
        <>
            <div className='choices-div'>
                <div >{category.title}</div>
                <span onClick={() => removeHandler(category)}>X</span>
            </div>
        </>
    )
}

export { Choices }