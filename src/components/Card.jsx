export default function Card(media) {
  return (
    <>
      <li key={media.id}>
        <ul>
          <li>{media.title || media.name}</li>
          <li>{media.original_title || media.original_name}</li>
          <li>{media.original_language}</li>
          <li>{media.overview}</li>
        </ul>
      </li>
    </>
  );
}
