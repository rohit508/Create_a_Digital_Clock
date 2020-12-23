import React,{useState} from "react";
import './index.css';

const App = () => {
let newtime = new Date().toLocaleTimeString();
const [ctime , setctime] = useState(newtime);

const update = ()=>{
    let newctime = new Date().toLocaleTimeString();
    setctime(newctime);

};
setInterval(update,1000);
    return (
        <>
            <div className="container">
                <h1 className="Time">{newtime}</h1>
                {/* <button className="Timebtn" onClick = {update}  >Get Time</button> */}
                </div>

        </>
    )

}





export default App;