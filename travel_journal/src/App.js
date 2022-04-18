import React from 'react';
import './index.css';
import Header from './components/header';
import Main from './components/main';
import data from './data'
export default function App() {
    const cards = data.map(card => {
        return ( 
            <Main
                key={card.id}
                {...card}

            />
        )
    })


    return ( 
        <div className="app__div">
            <Header />
            <section className="cards__list">
                {cards}
            </section>
        </div>
    )
}