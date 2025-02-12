import { useState } from "react";
import { useApiDataContext } from "../contexts/ApiDataContext";
import axios from "axios";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const { setMovies } = useApiDataContext();

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
  };

  return (
    <form onSubmit={handlerSearch}>
      <input
        type="search"
        placeholder="Cerca..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Cerca</button>
    </form>
  );
}
