import "./App.css";
import SearchEngine from "./SearchEngine";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> WeatherWhiz</h1>
        <SearchEngine />
      </header>
      <footer>
        <a href="https://github.com/NK-01/weatherwhiz">Open source code</a> by
        <a href="https://github.com/NK-01">Nidhi Kumari</a>
      </footer>
    </div>
  );
}

export default App;
