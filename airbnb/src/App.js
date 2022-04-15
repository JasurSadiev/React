import React from 'react';
import './index.css'
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import data from "./data";

const App = () => {
    const cards = data.map(item => {
      return(
        <Card 
          key = {item.id}
          {...item}
        />
      )
    })
  return (
    <div>
        <Navbar />
        <Hero />
        <section className="cards_list">
          {cards}
        </section>
    </div>
  )
}

export default App