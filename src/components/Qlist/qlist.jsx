import React from "react";
import { useNavigate } from "react-router-dom";
import "../Qlist/qlist.css"


const Qlist=()=>{

    const navigate=useNavigate();

    const quesList=[
        {question:"What is the color of sky?"},
        {question:"When did the world war start?"},
        {question:"When was India won the first World Cup?"}
        
    ]


    return(
        <div className="list-card">
            <h2 className="h2-qlist">Question List</h2>
            <div className="list">
           { 
            localStorage.getItem('Question')&&(
                <span className="sub-tags">
                        <p className="ptag">{localStorage.getItem('Question')}</p>
                </span>
            )
           
           }

            {   
                
                quesList.map((data)=>
                <span className="sub-tags">
                        <p className="ptag">{data.question}</p>
                </span>
                )
            }
            </div>   

        </div>

    )
}
export default Qlist
