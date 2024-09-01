import axios from "axios";
import React, { useState } from "react";
import "./Search.css";

function Search({ onSearchResults, onClearSearch }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    console.log("Search term:", value);
    setSearch(value);

    if (value === "") {
      onClearSearch();
    }
  };

  const handleSearch = async (search) => {
    console.log("Searching for:", search);
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:3000/search/?search=${search}`
      );
      console.log("Search results:", data);
      onSearchResults(data);
    } catch (error) {
      console.log("Error fetching search results:", error);
    }
  };

  return (
    <div>
      <label htmlFor="site-search">Search</label>
      <input
        type="search"
        id="site-search"
        name="q"
        value={search}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={() => handleSearch(search)}>Search</button>
    </div>
  );
}

export default Search;
