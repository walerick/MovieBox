import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import MoviePage from "./MoviePage";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header"></header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movies/:id">
            <MoviePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
