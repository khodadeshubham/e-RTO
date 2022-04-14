import React,{useState, useEffect} from "react"
import myimg from '../images/RTOS.jpg';
import { BrowserRouter, Route, Link, Routes,useParams} from 'react-router-dom';
import StaffNavBar from "./StaffNavBar";
import { useNavigate } from "react-router-dom";
import CitizenNavBar from "./CitizenNavBar";

export default function ViewLearningApp(props){
    let navigate= useNavigate();
    
    const[flag1, setFlag1]=useState(false);
    const[flag2, setFlag2]=useState(false);
    const[flag3, setFlag3]=useState(false);

    const[state,setState]= useState({
        application:{}       
    });

    const[fname, setFname]=useState("");
    const[lname, setLname]=useState("");
    const[contact, setContact]=useState("");
    const[email,setEmail]=useState("");
    const[aadhar, setAadhar]=useState("");
    const[gender, setGender]=useState("");
    const[dob, setDOB]=useState("");
    const[blood_group, setBloodGroup]=useState("");
    const[identification_mark, setIdentificationMark]=useState("");
    const[presentAdd, setPresentAdd]=useState("");
    const[permanentAdd, setPermanentAdd]=useState("");
    const[aadharFile, setAadharFile]= useState("");
    const[signFile, setSignFile]= useState("");
    const[photoFile, setPhotoFile]= useState("");

    const[msg, setMsg]= useState("")
    //const { application_id } = props.match.params;
    const params= useParams();

    useEffect(()=>{
        //alert(application_id)
        //console.log(props.params.application_id)
         fetch("http://localhost:8080/getAppById/" + params.application_id)
        .then(resp=>resp.json())
        .then(data=> {
           // const obj= JSON.parse(data);
            console.log(data);
            setState({application:data})
            setFname(data.citizen.fname);
            setLname(data.citizen.lname);
            setContact(data.citizen.contact_no);
            setEmail(data.citizen.user.email);
            setAadhar(data.aadhar);
            setDOB(data.dob);
            setBloodGroup(data.blood_group);
            setGender(data.gender);
            setIdentificationMark(data.identification_mark);
            setPresentAdd(data.present_address);
            setPermanentAdd(data.permanent_address);
            setAadharFile(data.doc.aadhar_card)
            setSignFile(data.doc.signature)
            setPhotoFile(data.doc.photo)
            
        }) 
        
    }, [params.application_id]) 


    const handleInput=(ev)=>{
        setState((state)=>(
         {
             ...state,
             [ev.target.name]: ev.target.value 
         }
     ));
 }

    const update=(ev)=>{
        ev.preventDefault();
        fetch("http://localhost:8080/updatestatus?appId="+state.application.application_id+"&status="+state.application_status)
        .then(resp => resp.json())
        .then(data =>{
            if(data === true)
            {
                setMsg("Status Updated successsfully")
            }
        })
    }

    const viewA=(ev)=>{
        ev.preventDefault();
        setFlag1(true);
        setFlag2(false);
        setFlag3(false);
    }

    const viewB=(ev)=>{
        ev.preventDefault();
        setFlag1(false);
        setFlag2(true);
        setFlag3(false);
    }

    const viewC=(ev)=>{
        ev.preventDefault();
        setFlag1(false);
        setFlag2(false);
        setFlag3(true);
    }

    return(
        <div>
                <div className="bg-secondary">  
                     <CitizenNavBar/>
                    <div className="container bg-secondary text-white">
                    <h4>Learning Licence Application</h4>
                <div className="form-row">
                     <div className="form-group col-md-6">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" className="form-control" name= "fname" id="fname" value={fname} placeholder="First Name" readOnly/>
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" className="form-control" name= "lname" id="lname" value={lname} placeholder="Last Name" readOnly/>
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="contact_no">Contact Number</label>
                        <input type="text" className="form-control" name= "contact_no" id="contact_no" value={contact} placeholder="Contact Number"  readOnly/>
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="aadhar">Aadhar Card Number</label>
                        <input type="text" className="form-control" name= "aadhar" id="aadhar" value={aadhar} placeholder="Aadhar Card Number"  readOnly/>
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" name="email" id="email" value={email} placeholder="Email"  readOnly/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="DOB">Date of Birth</label>
                        <input type="text" className="form-control" name="DOB" id="DOB" value={dob}  readOnly/>
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="gender">Gender </label><br/>
                        <input type="text"  id="gen" className="form-control" name="gender" value={gender} readOnly />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="blood_group">Blood Group</label>
                        <input type="text" className="form-control" name="blood_group" id="blood_group" value={blood_group} placeholder="Blood Group"   readOnly/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="identification_mark">Identification_mark</label>
                        <input type="text" className="form-control" name="identification_mark" id="identification_mark" value={identification_mark}   readOnly />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="present_address">Present Address </label>
                        <textarea type="text" className="form-control" name="present_address" id="present_address" value={presentAdd}  readOnly  />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="permanent_address">Permanent Address</label>
                        <textarea type="text" className="form-control" name="permanent_address" id="permanent_address" value={permanentAdd}    readOnly />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="aadhar_card">Aadhar Card</label>
                        <button className="btn btn-primary" onClick={viewA}>View</button>
                        <img style={{display:flag1?'block':'none'}} className="blob-to-image" src={"data:image/jpeg;base64,"+aadharFile} width="500px" height="300px" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="signature">Signature</label>
                        <button className="btn btn-primary" onClick={viewB}>View</button><br/>
                        <img style={{display:flag2?'block':'none'}} className="blob-to-image" src={"data:image/jpeg;base64,"+signFile} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="photograph">Photograph</label>
                        <button className="btn btn-primary" onClick={viewC}>View</button>
                        <img style={{display:flag3?'block':'none'}} className="blob-to-image" src={"data:image/jpeg;base64,"+photoFile} width="100px" height="150px" />
                    </div>
                     
                        <form>
                            <div className="form-group col-md-4">
                                <label htmlFor="application_status">Update Status</label>
                                <select className="form-control form-select" aria-label="Default select example" name= "application_status" id="application_status" onChange={handleInput}   required>
                                    <option value="pending">Pending</option>
                                    <option value="verified">Verified</option>
                                    <option value="completed">Completed</option>
                                </select>
                                <button type="submit" className="btn btn-primary" onClick={update}>Update</button>
                                <p>{msg}</p>
                            </div>
                         </form>  
                    </div>
                    </div>
                </div>
        </div>
    )
}