import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// pages
import Timeline from './pages/timeline/Timeline';
import Blog from "./pages/blogs/Blog";
import Main from './pages/main/Main';
// import jsyaml from 'js-yaml';
// import { info } from "./libs/TImelineInfo";
// import timeline from './../content/timeline/info.yaml';
import { Route } from "react-router-dom";

function App() {
  // var doc = jsyaml.load(timeline);
  // console.log(info)
  return (
    <div className="App">
      <Header />
      <Route exact path="/timeline" >
        <Timeline />
      </Route>
      <Route exact path="/blog" >
        <Blog />
      </Route>
      <Route exact path="/">
        <Main />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
