import React from "react";
import "../Ans_ques/ans_ques.css"
import Qlist from "../Qlist/qlist";
import Enter_ans from "../Enter_ans/enter_ans";
import Button from "../Button/button";
import { useNavigate } from "react-router-dom";


const Ans_ques=()=>{

    const navigate=useNavigate();

    return (
        <div>
            <div className="ansques-div">
                <div className="answer-page">
                    <Qlist/>
                    <Enter_ans/>
                </div>
                <div className="button-style-ans">
                    <Button onClick={()=>navigate('/')} style={{width:"4rem", fontSize:"1rem"}}>
                        <span>Cancel</span>
                    </Button>
                    <Button style={{fontSize:"1rem"}} >
                        <span>Post Answer</span>
                    </Button>
                </div>
            </div>
        </div>

    )
}
export default Ans_ques