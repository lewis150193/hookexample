import React, {useState,useEffect} from 'react';
import './App.css';
import {dataChar} from "./fetchData/data";

function App() {
  const[data, setData] = useState([]);

  useEffect( () => {
    dataChar().then( data => setData(data.data.results))
  });
  return (
    <div className="App">
      {data.map( i => {
        return(
            <div>
              <p>{i.name}</p>
            </div>
        )
      })}
    </div>
  );
}

export default App;
