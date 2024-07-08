import React from "react";
// import { Outlet } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { Outlet } from "react-router-dom";
import './App.css';


function App() {
  return (
    <>
<Header />
<Outlet />
<Footer />
    </>
  );
}

export default App;
