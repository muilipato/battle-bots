import  React from 'react';
import {useState, useEffect} from 'react';
import BotCollection from './BotCollection';
import ViewBot from './ViewBot';


function App(){
    const [data, setData] =useState([]);
    const [viewBot, setviewBot] =useState({
        "id": 101,
        "name": "wHz-93",
        "health": 94,
        "damage": 20,
        "armor": 63,
        "bot_class": "Support",
        "catchphrase": "1010010101001101100011000111101",
        "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1",
        "created_at": "2018-10-02T19:55:10.800Z",
        "updated_at": "2018-10-02T19:55:10.800Z"
      });

    function getBots(){
        fetch('https://mybots-mr5t.onrender.com/bots',{
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
            <ViewBot doc={viewBot} setDoc={setviewBot}/>
           <BotCollection data ={data} setviewBot= {setviewBot}/>
        </div>
    )
}
export default App;