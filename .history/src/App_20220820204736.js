import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Home/Header/Header";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Route exact path='/Home' component={Home} />
      <Route exact path='/About' component={About} />
      <Route exact path='/Contact' component={Contact} />
      <Route exact path='/Login' component={Login} />
      <Route exact path='/' component={Home} />
      {/* <Route path='*' component={Home} /> */}
    </BrowserRouter>
  );
}

export default App;
