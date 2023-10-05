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
                <div className='remove' onClick={() => removeHandler(category)}>X</div>
            </div>
        </>
    )
}

export { Choices }