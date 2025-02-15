import { useState } from "react";
import { useApiDataContext } from "../contexts/ApiDataContext";
import axios from "axios";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const { setMovies, setSeries } = useApiDataContext();

  const handlerSearch = (e) => {
    e.preventDefault();

    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "888c0c9d1de41a38514db8ca43ca32e6",
          language: "it-IT",
          query: search,
        },
      })
      .then((res) => setMovies(res.data.results));

    axios
      .get("https://api.themoviedb.org/3/search/tv", {
        params: {
          api_key: "888c0c9d1de41a38514db8ca43ca32e6",
          language: "it-IT",
          query: search,
        },
      })
      .then((res) => setSeries(res.data.results));
  };

  return (
    <form className="searchForm flex" onSubmit={handlerSearch}>
      <div className="flex">
        <label htmlFor="search">Non sai cosa guardare?</label>
        <div>
          <input
            id="search"
            type="search"
            placeholder="Chi cerca..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">...Trova</button>
        </div>
      </div>
    </form>
  );
}
