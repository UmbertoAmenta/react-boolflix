import { createContext, useContext, useState } from "react";

const ApiDataContext = createContext();

const ApiDataProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  return (
    <ApiDataContext.Provider value={{ movies, setMovies, series, setSeries }}>
      {children}
    </ApiDataContext.Provider>
  );
};

const useApiDataContext = () => {
  const context = useContext(ApiDataContext);
  return context;
};
// alternativa
// const useApiDataContext = () => useContext(ApiDataContext);

export { ApiDataProvider, useApiDataContext };
