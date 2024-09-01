import React, { useState } from "react";
import "./Homepage.css";
import ProductCard from "./ProductCard";
import Search from "./Search";

function HomePage({ data, role, fetch }) {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchResults = (results) => {
    setSearchResults(results);
    setIsSearching(true);
  };

  const handleClearSearch = () => {
    setSearchResults([]);
    setIsSearching(false);
  };

  return (
    <div className="home-container">
      <Search
        onSearchResults={handleSearchResults}
        onClearSearch={handleClearSearch}
      />
      <div className="product-grid">
        {(isSearching ? searchResults : data).map((el) => (
          <div key={el.id} className="product-card">
            <ProductCard el={el} role={role} fetch={fetch} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
