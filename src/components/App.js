import React from 'react'
import '../styles/App.css';
import Navbar from './Navbar/navbar.jsx';
import Search from './Search/search.jsx';
import Home from './Home/home';
import Add_ques from './Add_ques/add_ques';
import Ans_ques from './Ans_ques/ans_ques';
import Login from './Login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Register/register';






const App = () => {

    // var i=0;
    // const questionObj={};
    // function ques_posted (data) {
    //     // questionObj[props.i]=data;       
    //     localStorage.setItem('Questions', data);
        
 
    // };
  

  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes> 
          <Route path="/" element={<Home />}/>
          <Route path="/add_ques" element={<Add_ques/>}/>
          <Route path="/ans_ques" element={<Ans_ques/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
 
    
    </div>
      
     
    
  )
}


export default App;
