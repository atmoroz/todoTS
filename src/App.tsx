import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import TodoNav from "./components/TodoNav";
import AboutPage from "./pages/AboutPage";
import TodoPage from "./pages/TodoPage";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <TodoNav />
        <div className="container">
          <Switch>
            <Route exact path="/" component={TodoPage} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
