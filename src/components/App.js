import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import StartGame from "./StartGame";

//define initial state
const initialState = {
  categories: [],
  selectCategory: null,
};

//define reducer function
function reducer(state, action) {
  switch (action.type) {
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
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
        <StartGame />
      </Main>
    </div>
  );
}

export default App;
