import React from "react";
import data from "./data";
import Navbar from './components/Navbar';
import TravelCard from "./components/TravelCard";

export default function App () {
    // console.log(data)
    const hotDestinations = data.map((destination) => {
        return <TravelCard 
            key ={destination.id}
            destination ={destination}
        />
    })
    
    return (
        <div>
            <Navbar />
            {hotDestinations}
        </div>
    )
}