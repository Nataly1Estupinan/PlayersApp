import React, { useState } from "react";
import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";

function Search() {
  const [searchText, setSearchText] = useState("");
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/?search=" + searchText)
  };
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          classnName={styles.searchInput}
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className={styles.searchButton} type="submit">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
}

export default Search;
