function StartGame({ selectedCategory }) {
  return (
    <div className="start">
      <h2>Start Game</h2>
      {selectedCategory ? (
        <p>Ready</p>
      ) : (
        <p>Please select a category to start the game.</p>
      )}
    </div>
  );
}

export default StartGame;
