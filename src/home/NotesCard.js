import React, { useState } from 'react'


const NotesCard = () => {
    const [inputValue, setInputValue] = useState("")

    return (
        <>
            <label>All notes</label>
            <textarea onChange={(e) => setInputValue(e.target.value)} value={inputValue}>
                {inputValue}
            </textarea>
        </>
    )
}

export { NotesCard }