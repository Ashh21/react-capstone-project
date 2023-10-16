import React, { useEffect, useState } from 'react'

const NotesCard = () => {
    const [inputValue, setInputValue] = useState(() => {
        const localData = localStorage.getItem("notes");
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(inputValue))
    }, [inputValue])
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