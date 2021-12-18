import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Search from "./components/Search";
import WishList from "./components/WishList";
import Inventory from "./components/Inventory";
import BookDetails from "./components/BookDetails";
// import SearchResults from "./components/SearchResults";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/search" component={Search} />
        {/* <Route
          path="/searchresults"
          component={(props) => <SearchResults {...props} />}
        /> */}

        <Route
          path="/details/:id"
          component={(props) => <BookDetails {...props} />}
        />
        <Route exact path="/wishlist" component={WishList} />
        <Route exact path="/inventory" component={Inventory} />
      </Switch>
    </div>
  );
}

export default App;
