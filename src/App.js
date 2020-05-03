import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import MonitorItem from"./componets/monitoritem";

const getData= async() =>{
 const response =await axios.get("https://coronavirus-19-api.herokuapp.com/countries/brazil"
 );
console.log("response", response);
}


function App() {
  useEffect(() => {
    getData();
    setInterval(()=> {
      getData()}
      , 2000);
    },[]);
const [casos, setCasos] = useState();
const[casosHoje, setCasosHoje] =useState();
const [mortes, setMortes] = useState();
const[critical, setCritical] =useState();
const getData= async() =>{
  const response =await axios.get("https://coronavirus-19-api.herokuapp.com/countries/brazil"
  );
 console.log("response", response.data);
 setCasos(response.data.cases)
 setCasosHoje(response.data.todayCases)
 setMortes(response.data.deaths)
 setCritical(response.data.critical)
 };
  return (
    <div className="App">
      <header className="App-header">
      
        <h1>
          Monitor Covid-19
        </h1>
        <div style={{display: "flex", justifyContent: "space-around", width:"100%", flexDirection: "row"}}>
        <MonitorItem label ="Casos totais" number={casos}/>
        <MonitorItem label ="Casos Hoje"
        number={casosHoje}
        increase={((casosHoje/(casos-casosHoje))*  100).toFixed(2)} />
        <MonitorItem label ="Mortes" number={mortes}/>
        <MonitorItem label ="Casos Críticos" number={critical}/>
        
        </div>
        
        
        
      </header>
    </div>
  );
}

export default App;
