import React,{useState, useEffect} from "react";
import StaffNavBar from "./StaffNavBar";
import myimg from '../images/RTOS.jpg';
import { Link, useNavigate } from "react-router-dom";


export default function LearningAppList(){
    let navigate= useNavigate();
    const [ state, setState]= useState(
        {
            appData:[],
            app_id:""
        }
        
    )

    useEffect(()=>{
        //alert("useEffect")
        fetch("http://localhost:8080/getallapp").
        then(resp=>resp.json()).
        then(data=> {
            //console.log(data)
            setState({appData: data})
        })
    }, [])  


    return(
        <div>
            <div>
                <StaffNavBar/>
                <div className="bg-light text-black">
                <h4>Learning Licence Applications</h4>
                <div className="container"> 
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Application ID</th>
                                <th>Applicant Name</th>
                                <th>Application Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>                       
                    {
                        state.appData.map((v)=>{
                            return(
                                <tbody>
                                    <tr className="text-black" key={v.application_id}>
                                        <td>{v.application_id}</td>
                                        <td>{v.citizen.fname} {v.citizen.lname} </td>
                                        <td>{v.application_type} </td>
                                        <td><a href={`/viewlearningapp/${v.application_id}`} className="btn btn-primary">View</a></td>
                                    </tr>
                                </tbody>                                
                            )
                        })
                    }  
                    </table>             
                </div>
            </div> 
            </div>           
        </div>
    )
}