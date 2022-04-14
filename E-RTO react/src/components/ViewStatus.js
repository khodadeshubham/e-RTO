import React,{useState, useEffect} from "react"
import myimg from '../images/RTOS.jpg';
import { BrowserRouter, Route, Link, Routes,useParams} from 'react-router-dom';
import StaffNavBar from "./StaffNavBar";
import { useNavigate } from "react-router-dom";
import CitizenNavBar from "./CitizenNavBar";

export default function ViewStatus(props){
    let navigate= useNavigate();
    //const [ application, setApplication]= useState({});
    const[state,setState]= useState({
        appId:0,
        application_status:""       
    });

    const params= useParams();

    useEffect(()=>{
         fetch("http://localhost:8080/checkstatus/" + params.citizen_id)
        .then(resp=>resp.json())
        .then(data=> {
            console.log(data.application_id);
            setState({appId:data.application_id});
            setState({application_status:data.application_status});
        })         
    }, []) 

    return(
            <div  >  
                     <CitizenNavBar/>
                     <h4>Status</h4>
                     <div className="container bg-primary text-white col-md-4">
                     <p>Your application: {state.appId}</p>
                     <p>Status: {state.application_status}</p>
                     </div>
           
        </div>
    )
}

