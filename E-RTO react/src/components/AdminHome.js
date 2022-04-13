import React, { useState } from "react";
import myStore from "./Store";
import { useNavigate } from "react-router-dom";
import StaffRegister from "./StaffRegistration";
import { BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import Home from "./Home";
import myimg from '../images/RTOS.jpg';
import AdminNavBar from "./AdminNavBar";

export default function AdminHome (){
    let navigate= useNavigate();

    const [flag,setflag] = useState("false");

    myStore.subscribe(()=>{this.setState({flag:myStore.getState().loggedin})})
    
    const logout=()=>{
        myStore.dispatch({type: 'LOGGEDOUT'});
        localStorage.removeItem("loggeduser");
        navigate("/");
    }
        return(
            <div style={{ backgroundImage:`url(${myimg})`, height:"500px", backgroundPosition:"center"}} >
                 <div >  
                      <AdminNavBar/>   
                      <h1>Welcome Admin</h1>                         
                </div>
                   
                {/*<ul>
                    <li><a href="/adminhome">Home</a></li>
                    <li><a href="/staffregister">New Staff Registration</a></li>
                    <li><a href="" onClick={logout}>LOGOUT</a></li>
                </ul>*/}
            </div>
            
        )

}