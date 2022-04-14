import React from "react";
import myimg from '../images/RTOS.jpg';
import CitizenNavBar from "./CitizenNavBar";

export default function SlotBook(){
    return(
            <div style={{ backgroundImage:`url(${myimg})`, height:"500px", backgroundPosition:"center"}}>
                <div  >  
                     <CitizenNavBar/>
                     <h4>Slot Booking Page</h4>
                     <a href="/writtentestslot">MCQ Test slot booking</a><br/>
                     <a href="/drivingtestslot">Driving Test slot Booking</a>
            </div>
        </div>
    )
}