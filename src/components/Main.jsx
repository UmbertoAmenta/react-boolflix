import CardsList from "./CardsList";

export default function Main() {
  return (
    <main>
      <div className="container">
        <h2>Il nostro catalogo</h2>
        <CardsList type="movies">
          <h3>Films</h3>
        </CardsList>
        <CardsList type="series">
          <h3>Serie TV</h3>
        </CardsList>
      </div>
    </main>
  );
}
