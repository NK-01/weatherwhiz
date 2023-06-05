import "./App.css";
import SearchEngine from "./SearchEngine";
function App() {
  return (
    <div className="App">
      <h1> WeatherWhiz</h1>
      <SearchEngine />
      <footer>
        <a
          href="https://github.com/NK-01/weatherwhiz"
          target="_blank"
          rel="noreferrer"
        >
          Open source code
        </a>{" "}
        by
        <a href="https://github.com/NK-01" target="_blank" rel="noreferrer">
          Nidhi Kumari
        </a>
      </footer>
    </div>
  );
}

export default App;
