import logo from './logo.svg';
import './App.css';
import React from "react"
import Banner from "./components/Banner"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}            
                item={item}
            />
        )
    })
    return (
        <>
        <Banner />
        <div className="site">
            <section>
                {cards}
                console.log({cards.length})
                
            </section>
        </div>
        </>
    );
}


