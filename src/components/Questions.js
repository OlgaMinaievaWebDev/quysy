function Questions({ questions }) {
  console.log(questions);
  return (
    <div>
      <h2>Quiz Questions</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <p>{question.question}</p>
            <ul>
              {[...question.incorrect_answers, question.correct_answer].map(
                (answer, i) => (
                  <li key={i}>{answer}</li>
                )
              )}
            </ul>
          </li>
        ))}
      </ul>
      <button>Next</button>
    </div>
  );
}

export default Questions;
