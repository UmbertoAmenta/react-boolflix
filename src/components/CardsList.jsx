import { useApiDataContext } from "../contexts/ApiDataContext";

import Card from "./Card";

export default function CardsList({ children, type }) {
  const { movies, series } = useApiDataContext();
  const mediaType = type === "movies" ? movies : series;

  return (
    <div>
      {children}
      <ul className="cardlist flex">
        {mediaType.map((media) => {
          return <Card key={media.id} {...media} />;
        })}
      </ul>
    </div>
  );
}
