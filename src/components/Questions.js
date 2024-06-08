import { useState } from "react";

function Questions({ questions, onAnswer }) {
  console.log(questions);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAnswer = (answer) => {
    onAnswer(answer, questions[currentIndex]);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const currentQuestion = questions[currentIndex];
  return (
    <div>
      <h2>Quiz Question</h2>
      <p>{currentQuestion.question}</p>
      <ul>
        {[
          ...currentQuestion.incorrect_answers,
          currentQuestion.correct_answer,
        ].map((answer, i) => (
          <li key={i}>
            <button onClick={() => handleAnswer(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Questions;
