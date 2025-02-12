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
    xx: "XX",
    tr: "TR",
    tl: "PH",
  };

  const flagImg = flag[media.original_language]
    ? `https://purecatamphetamine.github.io/country-flag-icons/3x2/${
        flag[media.original_language]
      }.svg`
    : media.original_language;

  return (
    <>
      <li key={media.id}>
        <ul>
          {/* <li>{media.title || media.name}</li>
          <li>{media.original_title || media.original_name}</li> */}
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
          {/* <li>{media.overview}</li> */}
        </ul>
      </li>
    </>
  );
}
