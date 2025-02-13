import { flags } from "../data/flags";
import { useState } from "react";

export default function Card(media) {
  const [isHovered, setIsHovered] = useState(false);

  const flagDefault =
    "https://tse1.mm.bing.net/th?id=OIG3.nv.eeSksGNkqaH276n6X&pid=ImgGn";

  const flagImg = flags[media.original_language]
    ? `https://purecatamphetamine.github.io/country-flag-icons/3x2/${
        flags[media.original_language]
      }.svg`
    : flagDefault;

  const voteAverageStars = (vote) => {
    if (vote == 0) {
      return <p>Non disponibile</p>;
    }
    let voteStars = [];
    for (let i = 0; i < vote; i++) {
      voteStars.push(<i key={i} className="fa-solid fa-star"></i>);
    }
    while (voteStars.length < 5) {
      voteStars.push(
        <i key={voteStars.length} className="fa-regular fa-star"></i>
      );
    }
    return voteStars;
  };

  return (
    <>
      <li
        className="card"
        key={media.id}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          <img
            className={isHovered ? "hidden" : ""}
            src={
              media.poster_path
                ? `https://image.tmdb.org/t/p/w185/${media.poster_path}`
                : "https://tse1.mm.bing.net/th?id=OIG1.s_jXuVQallLQ5wk4K7qR&pid=ImgGn"
            }
          />

          <ul className={isHovered ? "" : "hidden"}>
            <li>Titolo: {media.title || media.name}</li>
            <li>
              Titolo originale: {media.original_title || media.original_name}
            </li>
            <li>
              Lingua originale:
              {flagImg ? (
                <img
                  className="flag"
                  src={flagImg}
                  alt={media.original_language}
                />
              ) : (
                media.original_language
              )}{" "}
            </li>
            <li>Voto: {voteAverageStars(Math.ceil(media.vote_average / 2))}</li>
            <li>Descrizione: {media.overview}</li>
          </ul>
        </div>
      </li>
    </>
  );
}
