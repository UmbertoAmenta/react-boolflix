export default function Card(movie) {
  return (
    <>
      <li key={movie.id}>
        <ul>
          <li>{movie.title}</li>
          <li>{movie.original_title}</li>
          <li>{movie.original_language}</li>
          <li>{movie.overview}</li>
        </ul>
      </li>
    </>
  );
}
