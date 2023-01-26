import React from "react";
import '../QACard/qacard.css';


const QACard = ()=>{

    
    const ques_ans=[
        {id:1,username:"Rahul",question:"what is the color of sky?",answer:"The color of sky blue because of ramen effect"},
        {id:2,username:"Vishal",question:"When did the world war start?",answer:"The first world war started in 1914."},
        {id:3,username:"Arjun",question:"When was India won the first World Cup?",answer:"The final of the 1983 Cricket World Cup was played between India and the West Indies at Lord's on 25 June 1983."},
        
    ]
   

        return (
            <div className="qacard">
            {
                ques_ans.map((data)=>
                    <div className="inner-card">
                        <h2 className="h2">{data.username}</h2>
                        <h3 className="h3">{data.question}</h3>
                        <p className="p">{data.answer}</p>
                    </div>
                )
            }

            </div>
        )

}
export default QACard