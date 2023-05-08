import DisplayBot from './DisplayBot';

function BotCollection({data, handleAddViewBot}){
    
    return(s
        <div className='botCollection'>
            {data.map((bot)=>{
                return (
                    <DisplayBot key ={bot.id} bot={bot} handleAddViewBot={handleAddViewBot}  />
                    
                )

            })}
            
        </div>
    )
}
export default BotCollection;