import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import CategorySelector from "./CategorySelector";
import Difficulty from "./Difficulty";
import StartGame from "./StartGame";

//define initial state
const initialState = {
  categories: [],
  selectedCategory: null,
  difficulties: [],
  selectedDifficulties: null,
  questions: [],
  loading: false,
  error: null,
};

//define reducer function
function reducer(state, action) {
  switch (action.type) {
    case "FETCH_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "SET_DIFFICULTIES":
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case "SELECT_CATEGORY":
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case "SET_DIFFICULTY":
      return {
        ...state,
        selectedDifficulties: action.payload,
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  //fetch category of quiz and mount on load
  useEffect(function () {
    fetch("https://opentdb.com/api_category.php")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "FETCH_CATEGORIES", payload: data.trivia_categories })
      )
      .catch((err) => console.error("Error fetching trivia categories:", err));
  }, []);

  //fetch difficulty of quiz
  useEffect(function () {
    const difficulties = ["easy", "medium", "hard"];
    dispatch({ type: "SET_DIFFICULTIES", payload: difficulties });
  }, []);

  //return
  return (
    <div className="app">
      <Header />
      <Main>
        <CategorySelector categories={state.categories} dispatch={dispatch} />
        <Difficulty difficulties={state.difficulties} dispatch={dispatch} />
        <StartGame selectedCategory={state.selectedCategory} />
      </Main>
    </div>
  );
}

export default App;
