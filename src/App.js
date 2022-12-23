import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import MonitorItem from"./componets/monitoritem";

const getData= async() =>{
 const response =await axios.get("https://covid19-brazil-api.now.sh/api/report/v1/brazil"
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
const[country, setCasosHoje] =useState();    
const [confirmed, setConfirmed] = useState();
const [mortes, setMortes] = useState();
const[updated_at, setCritical] =useState();
const getData= async() =>{
  const response =await axios.get("https://covid19-brazil-api.now.sh/api/report/v1/brazil"
  );
 console.log("response", response.data);
 setCasosHoje(response.data.data.country)
 setConfirmed(response.data.data.confirmed)
  setMortes(response.data.data.deaths)
 setCritical(response.data.data.updated_at)
 };
  return (
    <div className="App">
      <header className="App-header">
      
        <h1>
          Monitor Covid-19
          
        </h1>
        <div style={{display: "flex", justifyContent: "space-around", width:"100%", flexDirection: "row"}}>
        <MonitorItem label ="País" number={country}  />
        <MonitorItem label ="Casos totais" number={confirmed}/>
                <MonitorItem label ="Mortes" number={mortes}/>
        <MonitorItem label ="Atualizdo às" number={updated_at}/>
        
        </div>
        
        
        
      </header>
    </div>
  );
}

export default App;
