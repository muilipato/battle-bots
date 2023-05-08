import DisplayBot from "./DisplayBot";
function ViewBot({doc=null, setDoc =()=>{}}) {
    if(doc===null){
        return null;

    }
    function handleEnlist(){

    }
    function handleGoBack(){

    }
    return (
        <div>
          <DisplayBot bot={doc}/>
          <p>
            <button onClick={handleEnlist}>Enlist</button>
          </p>
          <p>
            <button onClick={handleGoBack}>Go Back</button>
          </p>
        </div>
    )

}
export default ViewBot;