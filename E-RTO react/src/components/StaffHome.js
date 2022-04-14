import React, { useState } from "react";
import myStore from "./Store";
import { useNavigate } from "react-router-dom";
import myimg from '../images/RTOS.jpg';
import { BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import StaffNavBar from "./StaffNavBar";

export default function StaffHome (){

        return(
            <div>
                 <div  style={{ backgroundImage:`url(${myimg})`, height:"500px", backgroundPosition:"center"}}>  
                            <div style={{ backgroundColor:"darkslateblue"}}>
                                <StaffNavBar/>
                            </div> 
                <h3>Welome {JSON.parse(localStorage.getItem("loggeduser")).fname}</h3>
                <ul>
                    <li><a href="/LearningApplist" className="text-dark">View Learning Licence Applications</a></li>
                    <li><a href="/permanentapplist" className="text-dark">View Learning Permanent Applications</a></li>
                </ul>
                </div>
            </div>
        )
}