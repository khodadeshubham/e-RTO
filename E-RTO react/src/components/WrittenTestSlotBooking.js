import React,{useState, useEffect} from "react"
import myimg from '../images/RTOS.jpg';
import CitizenNavBar from "./CitizenNavBar";

export default function WrittenTestSlot(){
    
    const[msg, setMsg]= useState("")

    const[state, setState]= useState(
        {
            date:"",
            selectedSlot:0
        }
    )

    const[slots, setSlots]= useState([])

    const handleInput=(ev)=>{
        setState((state)=>(
         {
             ...state,
             [ev.target.name]: ev.target.value 
         }
     ));
    }

    const getFreeSlots=(ev)=>{
        ev.preventDefault();
        //alert(state.date)
        fetch("http://localhost:8080/getfreeslots?date="+ state.date)
        .then(resp=> resp.json()
        .then(data=>{
            console.log(data)
            setSlots(data);
        }))
    }

    const bookSlot=(ev)=>{
        ev.preventDefault();
        alert(state.date)
        alert(state.selectedSlot)
        alert(JSON.parse(localStorage.getItem("loggeduser")).citizen_id)
        const req= {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:  JSON.stringify(
                {
                    cid: JSON.parse(localStorage.getItem("loggeduser")).citizen_id,
                    slot_id:state.selectedSlot,
                    date:state.date
                }
            )}
        fetch("http://localhost:8080/bookslot", req)
        .then(resp=> resp.json()
        .then(data=>{
            console.log(data);
            if(data === 1)
            {
                setMsg("Slot has been booked...")
            }
            else{
                setMsg("Slot booking failed")
            }
        }))
    }

    return(
            <div style={{ height:"500px"}}>
                <div  >  
                     <CitizenNavBar/>
                     <h4>Book Slot</h4>
                     <div className="container bg-primary text-white col-md-4">
                        <form>
                            <div className="form-row row g-3">
                                <div className="form-control col-md-12">
                                    <label htmlFor="date">Select Date</label>
                                    <input type="date" className="form-control" name= "date" id="date"  onChange={handleInput} onBlur={getFreeSlots}  required/>
                                
                                    <br/><label htmlFor="slot">Available Slots</label>
                                    <select  id="selectedSlot" name="selectedSlot" onChange={handleInput}>
                                        {
                                            slots.map((v)=>{
                                                return(
                                                   <option  value={v.slot_id}>Slot-{v.slot_id}:({v.start_time}-{v.end_time})</option>                               
                                                )
                                            })
                                        }
                                    </select>
                                    <br/><button type="submit" onClick={bookSlot}>Book Slot</button>
                                </div>
                            </div>
                        </form>
                        <div>{msg}</div>
                     </div>
            </div>
        </div>
    )
}