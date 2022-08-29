import React from "react";
import Header from "./components/Home/Header/Header";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="container-fluid">
      <Header/>
      <Home/>
      <About/>
      <Contact/>
      <Login/>
    </div>
  );
}

export default App;
