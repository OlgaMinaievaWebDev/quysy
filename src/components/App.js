import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import CategorySelector from "./CategorySelector";
import StartGame from "./StartGame";

//define initial state
const initialState = {
  categories: [],
  selectedCategory: null,
};

//define reducer function
function reducer(state, action) {
  switch (action.type) {
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "SELECT_CATEGORY":
      return {
        ...state,
        selectedCategory: action.payload,
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
        dispatch({ type: "SET_CATEGORIES", payload: data.trivia_categories })
      )
      .catch((err) => console.error("Error fetching trivia categories:"));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        <CategorySelector categories={state.categories} dispatch={dispatch} />
        <StartGame selectedCategory={state.selectedCategory} />
      </Main>
    </div>
  );
}

export default App;
