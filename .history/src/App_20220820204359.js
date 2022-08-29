import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Home/Header/Header";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="">
      <Header/>
      <Route path='/Home' component={Home} />
      <Route path='/Home' component={About} />
      <Route path='/Home' component={Contact} />
      <Route path='/Home' component={Login} />
    </div>
  );
}

export default App;
