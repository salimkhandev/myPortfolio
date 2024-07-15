import React, { Suspense, useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Spinner from "./components/Spinner";

const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const Projects = React.lazy(() => import("./components/Projects"));

function App() {


  return (
    <Router>
      <div className="App">
        <header>
          <Header />
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </Suspense>
        </header>
      </div>
          </Router>
  );
}

export default App;
