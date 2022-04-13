import React, { useState } from "react";
import myStore from "./Store";
import { useNavigate } from "react-router-dom";
import myimg from '../images/RTOS.jpg';
import { BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import CitizenNavBar from "./CitizenNavBar";

export default function CitizenHome (){
    let navigate= useNavigate();

    const [flag,setflag] = useState("false");

   /* const logout=()=>{
        myStore.dispatch({type: 'LOGGEDOUT'});
        localStorage.removeItem("loggeduser");
        navigate("/");
    }*/
        return(
            <div >
                <div>  
                     <CitizenNavBar/>
                    <h3>Welcome {JSON.parse(localStorage.getItem("loggeduser")).fname}</h3>
                    <div className=" col-md-12">
                        <ul>
                            <li><a href="/learningform" className="text-dark" >Apply for Learning Licence</a></li>
                            <li><a href="/permanentform"  className="text-dark" >Apply for Permanent Licence</a></li>
                            <li><a href="/slotbook" className="text-dark" >Book test slot</a></li>
                            <li><a href={`/viewstatus/${JSON.parse(localStorage.getItem("loggeduser")).citizen_id}`} className="text-dark" >Check Status of Your Application</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
}