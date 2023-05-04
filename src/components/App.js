import  React from 'react';
import {useState, useEffect} from 'react';
import BotCollection from './BotCollection';


function App(){
    const [data, setData] =useState([]);

    function getBots(){
        fetch(' http://localhost:8001/bots',{
            method: "GET",
        })
        .then((response) => response.json())
        .then((mybots) => {
            setData(mybots);
        })

    }

useEffect(()=>{
    getBots();
},[]);
console.log(data);

    return(
        <div>
           <BotCollection data ={data}/>
        </div>
    )
}
export default App;