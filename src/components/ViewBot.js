import DisplayBot from "./DisplayBot";
function ViewBot({doc=null,  removeViewBot =() =>{}}) {
    if(doc===null){
        return null;

    }
    function handleEnlist(){

    }
   
    return (
        <div>
          <DisplayBot bot={doc}/>
          <p>
            <button onClick={handleEnlist}>Enlist</button>
          </p>
          <p>
            <button onClick={removeViewBot}>Go Back</button>
          </p>
        </div>
    )

}
export default ViewBot;