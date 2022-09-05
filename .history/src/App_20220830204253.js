import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Header from "./components/Home/Header/Header";
import Modal from "./HOC/Modal/Modal";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import LoginCyberBugs from "./pages/CyberBugs/LoginCyberBugs/LoginCyberBugs";
import DemoHOCModal from "./pages/DemoHOCModal/DemoHOCModal";
import Detail from "./pages/Detail/Detail";
import LoadingComponent from "./pages/GlobalSetting/LoadingComponent/LoadingComponent";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import TodolistRCC from "./pages/Todolist/TodolistRCC";
import ToDoListRedux from "./pages/Todolist/TodolistRedux";
import TodolistRFC from "./pages/Todolist/TodolistRFC";
import BaiTapToDoListSaga from "./pages/ToDoListSaga/BaiTapToDoListSaga";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import { UserLoginTemplate } from "./templates/HomeTemplate/UserLoginTemplate";
import { useDispatch } from 'react-redux';
import { CyberbugsTemplate } from './templates/HomeTemplate/CyberbugsTemplate';

function App() {

  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'ADD_HISTORY', history: history });
  }, [])


  return (
    <>
      <Modal />
      {/* <Header /> */}
      <LoadingComponent />
      <Switch>
        <HomeTemplate exact path='/home' Component={Home} />
        <HomeTemplate exact path='/about' Component={About} />
        <HomeTemplate exact path='/contact' Component={Contact} />
        <HomeTemplate exact path='/Login' Component={Login} />
        <UserLoginTemplate exact path='/LoginCyberBugs' Component={LoginCyberBugs} />
        <HomeTemplate exact path='/detail/:id' Component={Detail} />
        <HomeTemplate exact path='/profile' Component={Profile} />
        <HomeTemplate exact path='/todolistRFC' Component={TodolistRFC} />
        <HomeTemplate exact path='/todolistRCC' Component={TodolistRCC} />
        <HomeTemplate exact path='/todolistRedux' Component={ToDoListRedux} />
        <HomeTemplate exact path='/todolistSaga' Component={BaiTapToDoListSaga} />
        <HomeTemplate exact path='/demohocmodal' Component={DemoHOCModal} />
        <CyberbugsTemplate exact path='/demohocmodal' Component={DemoHOCModal} />


        <HomeTemplate exact path='/' Component={Home} />
        <HomeTemplate path='*' Component={Home} />
      </Switch>

    </>
  );
}

export default App;
