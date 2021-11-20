import React from "react";
import './App.css' ;
import daily from "./daily.json" ;
import Test from "./Test.js"


import { Line } from "react-chartjs-2";


import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Menu, Dropdown, Button } from 'antd';



// let results = []
// let results_2 = []

// console.log(JSON.parse(daily));
// for (let i = 0; i < daily.length; i++) {
  
//   results.push(daily[i].data.station[0].temp)
  
// }


// for (let i = 0; i < daily.length; i++) {

//   results_2.push(daily[i].data.date);
  
// }

// console.log(daily.length);
// console.log(JSON.stringify(results));
// console.log(JSON.stringify(results_2));
// console.log(JSON.stringify(daily[0].data.station[0].temp));


export default function App() {
  return (
    <div className="App">
        
        <Test/>
    </div>

    
  );
}