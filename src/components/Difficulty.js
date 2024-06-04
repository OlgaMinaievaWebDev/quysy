function Difficulty({ difficulties, dispatch }) {
  const handleDifficulty = (e) => {
    dispatch({ type: "SET_DIFFICULTY", payload: e.target.value });
  };

  return (
    <div>
      <label htmlFor="difficulty">Difficulty:</label>
      <select id="difficulty" onChange={handleDifficulty}>
        <option value="">Select a difficulty</option>
        {difficulties.map((difficulty) => (
          <option key={difficulty} value={difficulty}>
            {difficulty}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Difficulty;
