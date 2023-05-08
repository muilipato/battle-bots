import React from 'react';
function DisplayBot({bot, handleAddViewBot=() =>{}}){
    return(
        <div className="single-bot" onClick={ () => {handleAddViewBot(bot)}}>
            <img className='bot-image' src={bot.avatar_url}/>
            <p><strong>Name: {bot.name}</strong></p>
            <p>{bot.catchphrase}</p>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armour: {bot.armor}</p>


        </div>
    )
}
export default DisplayBot;
