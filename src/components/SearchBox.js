import React from "react";

function SearchBox({ setQuery, value, onKeyPress }) {
  return (
    <div>
      <input
        className="searchBar"
        type="text"
        placeholder="Pesquisar..."
        onChange={(e) => setQuery(e.target.value)}
        value={value}
        onKeyPress={onKeyPress}
      />
    </div>
  );
}

export default SearchBox;
