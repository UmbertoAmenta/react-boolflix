export default function Card(media) {
  const flag = {
    it: "IT",
    fr: "FR",
    es: "ES",
    us: "US",
    en: "GB",
    de: "DE",
    pt: "PT",
    nl: "NL",
    be: "BE",
    se: "SE",
    ch: "CH",
    at: "AT",
    no: "NO",
    dk: "DK",
    fi: "FI",
    ie: "IE",
    ar: "SA",
    ko: "KR",
    cn: "CN",
    ja: "JP",
    hi: "IN",
    ru: "RU",
    tr: "TR",
    tl: "PH",
  };

  const flagDefault =
    "https://tse1.mm.bing.net/th?id=OIG3.nv.eeSksGNkqaH276n6X&pid=ImgGn";

  const flagImg = flag[media.original_language]
    ? `https://purecatamphetamine.github.io/country-flag-icons/3x2/${
        flag[media.original_language]
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
      <li key={media.id}>
        <ul>
          <li>{media.title || media.name}</li>
          <li>{media.original_title || media.original_name}</li>
          <li>
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
          <li>{voteAverageStars(Math.ceil(media.vote_average / 2))}</li>
          <img src={`https://image.tmdb.org/t/p/w185/${media.poster_path}`} />
          <li>{media.overview}</li>
        </ul>
      </li>
    </>
  );
}
