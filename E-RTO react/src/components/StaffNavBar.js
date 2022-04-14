import React, { useState } from "react";
import { BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import myimg from '../images/RTOS.jpg';
import myStore from "./Store";
import { useNavigate } from "react-router-dom";

export default function StaffNavBar(){
    let navigate= useNavigate();
    const logout=()=>{
        myStore.dispatch({type: 'LOGGEDOUT'});
        localStorage.removeItem("loggeduser");
        navigate("/");
    }

    return(
        <div> 
                            <div style={{backgroundColor:"darkslateblue"}}>
                                <ul className="nav nav-tabs">
                                <li className="nav-item"><Link className="nav-link text-light" to="/staffhome"> Home</Link> </li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/" onClick={logout}> LOGOUT</Link> </li>
                                </ul>
                            </div>
        </div>
    )
}