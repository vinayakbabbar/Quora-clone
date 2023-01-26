import React from "react";
// import Enterques from "../Enterques/enterques";
import Navbar from "../Navbar/Navbar";
import "../Add_ques/add_ques.css";
import Button from "../Button/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Add_ques=()=>{

    const navigate=useNavigate();

    const [Ques,setQues]=useState('');
    console.log(Ques);

    // window.localStorage.setItem('ques',Ques);
    // localStorage.setItem(JSON.stringfy('ques',Ques));

    // const questionObj={}

    const ques_posted = () => {

        // questionObj[props.i]=Ques;
       
        console.log(Ques);
        localStorage.setItem('key',"kfjlkdjflk");
        // localStorage.setItem(JSON.stringify('ques'),Ques);
        // i++;

        // navigate('/');

    };



    return(
        <div className="add_ques-div">
            {/* <Enterques/> */}
            <div className="ques-div">
                <h1 className="heading">Question:</h1>
                <input type="text" className="input-ques" placeholder="Type Your Question Here................" value={Ques} onChange={(e) => setQues(e.target.value)}></input>
            </div>
            <div className="button-style">
                <Button onClick={()=>navigate('/')} style={{width:"4rem", fontSize:"1rem"}}>
                    <span>Cancel</span>
                </Button>
                <Button onClick={()=>ques_posted()} style={{fontSize:"1rem"}} >
                    <span>Post Question</span>
                </Button>
            </div>
        </div>

    )
}
export default Add_ques