import Header from "./components/Header";
import Main from "./components/Main";
import { ApiDataProvider } from "./contexts/ApiDataContext";
import { useState } from "react";

export default function App() {
  const [movies, setMovies] = useState([]);
  // const [series, setSeries] = useState([]);

  return (
    <ApiDataProvider value={{ movies, setMovies }}>
      <Header />
      <Main />
    </ApiDataProvider>
  );
}
