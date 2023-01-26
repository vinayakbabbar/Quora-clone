import React, { useState } from "react";
import "../Enterques/enterques.css";

const Enterques=()=>{

    const [Ques,setQues]=useState('');
    console.log(Ques);



    return (
        <div className="ques-div">
            <h1 className="heading">Question:</h1>
            <input type="text" className="input-ques" placeholder="Type Your Question Here................" 
            value={Ques} onChange={(e) => setQues(e.target.value)}></input>
        </div>

    )
}
export default Enterques