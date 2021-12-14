import "./App.css";
import { Route, Link } from "wouter";
import ListOfGifs from "./components/ListOfGifs";
import GifDescription from "./components/GifDescription";

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <h1>
          <Link to="/">App</Link>
        </h1>
        <Link to="/gif/Colombia">Gifs de Colombia</Link>
        <Link to="/gif/Venezuela">Gifs de Venezuela</Link>

        <Route component={ListOfGifs} path="/gif/:keyword" />
        <Route component={GifDescription} path="/gif/:keyword/description/:id" />
      </section>
    </div>
  );
}

export default App;
