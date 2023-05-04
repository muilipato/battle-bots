import DisplayBot from './DisplayBot';

function BotCollection({data}){
    
    return(
        <div className='botCollection'>
            {data.map((bot)=>{
                return (
                    <DisplayBot key ={bot.id} bot={bot} />
                    
                )

            })}
            
        </div>
    )
}
export default BotCollection;