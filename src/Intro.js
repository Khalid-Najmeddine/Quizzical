import React from "react"

function Intro({handleClick}) {
    return (
        <main className="intro">
            <h1 className="intro-Header">Quizzical</h1>
            <p className="intro-Description">Test your knowledge with 5 random questions</p>
            <button className="intro-Button" onClick={handleClick}>Start quiz</button>
        </main>
    )
}

export default Intro 