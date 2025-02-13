import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header>
      <div className="container flex">
        <img src="/logo.svg" alt="Bf" />
        <SearchBar />
      </div>
    </header>
  );
}
