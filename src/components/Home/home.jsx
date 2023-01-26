import Navbar from "../Navbar/navbar";
import React from 'react'
import QACard from "../QACard/qacard";
import Qlist from "../Qlist/qlist";

const Home = ()=>{


    


    return(
        <div>
           
            <div className="mainpage">
            <QACard/>
            <Qlist/>
            </div>
        </div>
    )

}

export default Home