import React, { Suspense, useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Spinner from "./components/Spinner";
import useInfiniteScroll from "./components/useInfiniteScroll"; // Import the custom hook

const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const Projects = React.lazy(() => import("./components/Projects"));

function App() {
  const [items, setItems] = useState(['Home']);
  console.log('The length of the item ❤️',items.length); // Initial component to load

  const loadMoreItems = useCallback((done) => {
    setTimeout(() => {
      setItems((prevItems) => {
        const newItems = [...prevItems];
        if (prevItems.length === 1) newItems.push('About');
        else if (prevItems.length === 2) newItems.push('Contact');
        else if (prevItems.length === 3) newItems.push('Projects');
        return newItems;
      });
      done();
    }); // Simulate loading delay
  }, []);
console.log('Load More data ❤️',typeof(loadMoreItems));
  const [isFetching] = useInfiniteScroll(loadMoreItems);

  const renderComponent = (name) => {
    switch (name) {
      case 'Home':
        return <Home key="home" />;
      case 'About':
        return <About key="about" />;
      case 'Contact':
        return <Contact key="contact" />;
      case 'Projects':
        return <Projects key="projects" />;
      default:
        return null;
    }
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route exact path="/" element={<div>{items.map(renderComponent)}</div>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
        {isFetching && <Spinner />} {/* Show spinner while fetching */}
      </div>
    </Router>
  );
}

export default App;
