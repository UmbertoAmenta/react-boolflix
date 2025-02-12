import { useApiDataContext } from "../contexts/ApiDataContext";

import Card from "./Card";

export default function CardsList() {
  const { movies, series } = useApiDataContext();

  return (
    <div>
      <ul>
        {movies.map((movie) => {
          return <Card key={movie.id} {...movie} />;
        })}
      </ul>
      <ul>
        {series.map((serie) => {
          return <Card key={serie.id} {...serie} />;
        })}
      </ul>
    </div>
  );
}
