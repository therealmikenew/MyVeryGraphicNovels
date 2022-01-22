import "./styles/styles.css";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";
import WishList from "./pages/WishList";
import Inventory from "./pages/Inventory";
import BookDetails from "./pages/BookDetails";

function App() {
  const [update, setUpdate] = useState(true);

  const handleUpdate = () => {
    setUpdate(!update);
  };
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/search" component={Search} />

        <Route
          path="/details/:id"
          component={(props) => (
            <BookDetails {...props} handleUpdate={handleUpdate} />
          )}
        />
        <Route
          path="/wishlist"
          component={(props) => <WishList {...props} />}
        />
        <Route exact path="/inventory" component={Inventory} />
      </Switch>
    </div>
  );
}

export default App;
