import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Home/Header/Header";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import TodolistRCC from "./pages/Todolist/TodolistRCC";
import ToDoListRedux from "./pages/Todolist/TodolistRedux";
import TodolistRFC from "./pages/Todolist/TodolistRFC";
import BaiTapToDoListSaga from "./pages/ToDoListSaga/BaiTapToDoListSaga";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
      <Route exact path='/home' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/Login' component={Login} />
      <Route exact path='/detail/:id' component={Detail} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/todolistRFC' component={TodolistRFC} />
      <Route exact path='/todolistRCC' component={TodolistRCC} />
      <Route exact path='/todolistRedux' component={ToDoListRedux} />
      <Route exact path='/todolistSaga' component={BaiTapToDoListSaga} />
      <Route exact path='/' component={Home} />
      <Route path='*' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
