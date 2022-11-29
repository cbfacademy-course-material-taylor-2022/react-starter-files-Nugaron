import './App.css';
import React from 'react';
import Car from "./components/Car";
import Bicycle from "./components/Bicycle";
import Bus from "./components/Bus";
import Truck from "./components/Truck";
import Skateboard from "./components/Skateboard";

export default function App() {

  return (
    <div className="App">
           <Car/> 
           <Bicycle/>
           <Bus/>
           <Truck/>
           <Skateboard/>
      </div>
  );
}


