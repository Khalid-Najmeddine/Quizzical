import React from "react";
import Intro from "./Intro.js";
import Quiz from "./Quiz.js";
import shuffle from "./Algorithm.js";
import { nanoid } from "nanoid";

export default function App() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);

  async function startQuiz() {
    setIsPlaying(true);
    const response = await fetch("https://opentdb.com/api.php?amount=5");
    const data = await response.json();
    const questionsFromDatabase = data.results.map((item) => {
      const {
        category,
        type,
        difficulty,
        question,
        correct_answer,
        incorrect_answers,
      } = item;
      return {
        id: nanoid(),
        category: category,
        type: type,
        difficulty: difficulty,
        question: question,
        answers: shuffle(
          type === "multiple"
            ? shuffle([correct_answer, ...incorrect_answers])
            : ["True", "False"]
        ),
        correctAnswer: correct_answer,
      };
    });
    setQuestions(questionsFromDatabase);
  }

  return (
    <div>
      {!isPlaying && <Intro handleClick={startQuiz} />}
      {isPlaying && questions.length && (
        <Quiz
          questions={questions}
          setIsPlaying={setIsPlaying}
          startQuiz={startQuiz}
        />
      )}
    </div>
  );
}
