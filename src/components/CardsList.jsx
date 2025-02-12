import { useApiDataContext } from "../contexts/ApiDataContext";

import Card from "./Card";

export default function CardsList() {
  const { movies } = useApiDataContext();

  return (
    <ul>
      {movies.map((movie) => {
        return <Card key={movie.id} {...movie} />;
      })}
    </ul>
  );
}
