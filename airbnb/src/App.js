import React from 'react';
import './index.css'
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";

const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Card />
    </div>
  )
}

export default App