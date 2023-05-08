import  React from 'react';
import {useState, useEffect} from 'react';
import BotCollection from './BotCollection';
import ViewBot from './ViewBot';


function App(){
    const [data, setData] =useState([]);
    const [viewBot, setviewBot] =useState(null);

    const[army, setArmy] = useState([]);

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
 
function handleAddViewBot(doc){
    setviewBot(doc);
}

function removeViewBot(){
    setviewBot(null)
}
function Enlist(doc){
    

}
    return(
        <div>
           <ViewBot doc={viewBot} removeViewBot={removeViewBot}/>
           <BotCollection data ={data} handleAddViewBot={handleAddViewBot}/>
        </div>
    )
}
export default App;