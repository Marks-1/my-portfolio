import React from "react";
import "./style.css";
import Intro from './components/intro/Intro';
import About from './components/about/About';


export default function App() {
  return (
    <div>
      <Intro/>
      <About/>
    </div>
  );
}
