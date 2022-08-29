import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Home/Header/Header";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
      <Route exact path='/Home' component={Home} />
      <Route exact path='/About' component={About} />
      <Route exact path='/Contact' component={Contact} />
      <Route exact path='/Login' component={Login} />
      <Route exact path='/Detail' component={Detail} />
      <Route exact path='/' component={Home} />
      {/* <Route path='*' component={Home} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
