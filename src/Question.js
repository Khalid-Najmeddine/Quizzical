import React from "react"
import {nanoid} from "nanoid"

function Question({questionFromDatabase, handleClick, response, quizResult, isChecked}) {
    const chooseAnswer = questionFromDatabase.answers.map(answer => {
        const isSelected = response && response.answer === answer
        function possibleAnswer() {
            if (isSelected && !isChecked) {
                return "selected"
            }
            if (isChecked && answer === questionFromDatabase.correctAnswer) {
                return "correct"
            }
            if (isSelected && isChecked && !quizResult) {
                return "incorrect"
            } 
            if (!isSelected && isChecked && !(answer === questionFromDatabase.correctAnswer)) {
                return "off"
            }
        }
        return (
            <span
                key={nanoid()}
                className={`question-Answer ${possibleAnswer()}`}
                onClick={() => {
                    
                    if(!isChecked){
                        handleClick(answer, questionFromDatabase.id)
                    }
                }}
            >
                {answer}
            </span>
        )
    })

    return (
        <main className="question">
            <h3 className="question-Question">{questionFromDatabase.question}</h3>
            <div className="question-Answers">
                {chooseAnswer}
            </div>
        </main>
    )
}

export default Question