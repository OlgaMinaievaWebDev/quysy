function CategorySelector({ categories, dispatch }) {
  const handleChange = (event) => {
    dispatch({ type: "SELECT_CATEGORY", payload: event.target.value });
  };

  return (
    <div className="category-selector">
      <label htmlFor="category">Select Category: </label>
      <select id="category" onChange={handleChange}>
        <option value="">-- Select a category --</option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategorySelector;
