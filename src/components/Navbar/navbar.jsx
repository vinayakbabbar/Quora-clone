import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Button/button";
import "../Navbar/navbar.css"
import Search  from "../Search/search";

const Navbar = () =>{

    const navigate=useNavigate();

    return(
      
     
            <div>
            <nav className='navbar1'>
                <div>
                    <h1 onClick={()=>navigate('/')} className='logo'>Quora</h1>
                </div>
                <div>
                    <Search/>
                </div>
                <div>
                    <Button onClick={()=>navigate('/add_ques')} style={{fontSize:"1rem"}}><span>Add Questions</span></Button>
                </div>
                <div>
                    <Button onClick={()=> navigate('/ans_ques')} style={{fontSize:"1rem"}}><span>Add Answers</span></Button>
                </div>
                <div>
                    <Button onClick={()=>navigate('/login')} style={{fontSize:"1rem" ,width:"4rem"}}><span>Log In</span></Button>
                </div>
                
            </nav>
            </div>
            


     
    )
}

export default Navbar