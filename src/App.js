import React from 'react';
import './App.css';
import { Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// pages
import Timeline from './pages/timeline/Timeline';
import Blog from "./pages/blogs/Blog";
import BlogPost from "./pages/blogPost/BlogPost";
import Main from './pages/main/Main';
import Art from "./pages/art/Art";
import Admin from "./pages/admin/Admin";
import About from "./pages/about/About";

function App() {

  return (
    <div className="App">
      <Header />
      <div className="pages">
        <Route exact path="/timeline" >
          <Timeline />
        </Route>
        <Route exact path="/blog" >
          <Blog />
        </Route>
        <Route path="/blog/:id" >
          <BlogPost />
        </Route>
        <Route exact path="/art" >
          <Art />
        </Route>
        <Route exact path="/admin" >
          <Admin />
        </Route>
        <Route exact path="/about" >
          <About />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
      </div>
      <Footer />
    </div>
  );
}

export default App;
