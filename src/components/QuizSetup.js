import { useEffect, useState } from "react";
import Questions from "./Questions";

function QuizSetup() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [numberQuestions, setNumberQuestions] = useState(10);
  const [difficulty, setDifficulty] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.trivia_categories))
      .catch((error) => console.log("There is an error", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiURL = `https://opentdb.com/api.php?amount=${numberQuestions}&category=${category}&difficulty=${difficulty}`;
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
        setQuizStarted(true);
      })
      .catch((error) => console.log("oops", error));
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleDifficulty = (e) => {
    setDifficulty(e.target.value);
  };

  const handleNumQuestions = (e) => {
    setNumberQuestions(e.target.value);
  };

  return (
    <div>
      {!quizStarted ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="category">Choose Category</label>
          <select id="category" value={category} onChange={handleCategory}>
            <option value="">---Select Category---</option>
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <div>
            <label htmlFor="numQuestions">Choose Amount of Questions</label>
            <input
              type="number"
              id="numQuestions"
              min={10}
              max={50}
              value={numberQuestions}
              onChange={handleNumQuestions}
              required
            />
          </div>
          <div>
            <label htmlFor="difficulty">Choose Difficulty</label>
            <select value={difficulty} onChange={handleDifficulty}>
              {["easy", "medium", "hard"].map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Start Quizy</button>
        </form>
      ) : (
        <Questions questions={questions} />
      )}
    </div>
  );
}

export default QuizSetup;
