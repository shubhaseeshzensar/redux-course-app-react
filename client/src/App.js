import React, { Fragment, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./common/header-component";
import Home from "./components/home/home-page.component";
import PageNotFound from "./components/page-not-found/page-not-found.component";
import Courses from "./components/courses/courses.component";
import About from "./components/about/about-page.component";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </Fragment>
  );
}

export default App;
