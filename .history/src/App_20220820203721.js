import React from "react";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";

function App() {
  return (
    <div className="">
      <Home/>
      <About/>
      <Contact/>
      <Login/>
    </div>
  );
}

export default App;
