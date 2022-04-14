import React from "react";
import StaffNavBar from "./StaffNavBar";
import myimg from '../images/RTOS.jpg';

export default function PermanentAppList(){
    return(
        <div style={{ backgroundImage:`url(${myimg})`, height:"500px", backgroundPosition:"center"}}>
            <div>
                <StaffNavBar/>
                <h4>Permanent Licence Applications</h4>
            </div>
            
        </div>
    )
}