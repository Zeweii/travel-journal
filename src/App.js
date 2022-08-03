import logo from './logo.svg';
import './App.css';
import React from "react"
import Header from "./components/Header"
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
        <div className="site-body">
            <section>Hello World
                {cards}
            </section>
        </div>
    );
}


