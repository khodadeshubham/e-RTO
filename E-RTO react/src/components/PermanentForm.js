import React,{useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";
import myimg from '../images/RTOS.jpg';
import CitizenNavBar from "./CitizenNavBar";
import {axios} from 'axios'

export default function PermanentApplicationForm (){


    //const[appId, setAppId]= useState();
    const[formEnable, setFormEnable]= useState()

    const[msg,setMsg]=useState("")

    const [ state, setState]= useState(
        {
            aadhar:"",
            dob:"" ,
            blood_group:"",
            gender:"",
            identification_mark:"",
            present_address:"",
            permanent_address:"",
            application_type:"permanent",
            citizen:{
                    fname:JSON.parse(localStorage.getItem("loggeduser")).fname,
                    lname:JSON.parse(localStorage.getItem("loggeduser")).lname,
                    contact_no:JSON.parse(localStorage.getItem("loggeduser")).contact_no,
                    user:{
                         email:(JSON.parse(localStorage.getItem("loggeduser"))).user.email
                     } 
            } ,
            aadhar_card:null,
            photograph:null,
            signature:null            
        })


       /* const submitData=(ev)=>{
            ev.preventDefault();
            let formData = new FormData();
            formData.append("data",state.obj)
            formData.append("file1",state.aadhar_card)
            formData.append("file2",state.photograph)
            formData.append("file3",state.signature)
            console.log(formData);
            axios.post("http://localhost:8080/addapplication",formData)
                    .then(res=>{
                        console.log(res);
                    })            
        }*/

        //Text data
        const submitData=(ev)=>{
            ev.preventDefault();
            console.log(state);
            const req= {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body:  JSON.stringify(
                    {
                        aadhar: state.aadhar,
                        dob: state.dob,
                        gender: state.gender,
                        blood_group : state.blood_group,
                        identification_mark: state.identification_mark,
                        present_address: state.present_address,
                        permanent_address: state.permanent_address,
                        application_type:state.application_type,
                        citizen_id: JSON.parse(localStorage.getItem("loggeduser")).citizen_id

                    })
            }            
            fetch("http://localhost:8080/addapplication", req)
            .then(resp => resp.json())
            .then(data =>{
                console.log(data);
               // setAppId(data.application_id);
               // appId= data.application_id;
                //console.log(appId);
                if(data.application_id != 0)
                {
                    let formData = new FormData();
                    formData.append("file1",state.aadhar_card)
                    formData.append("file2",state.photograph)
                    formData.append("file3",state.signature)
                    const req1= {
                        method: 'POST',
                        headers: {
                            //'content-type': 'multipart/form-data'
                        },
                        body:  formData
                    } 
                    fetch("http://localhost:8080/addapplicationdocs/"+ data.application_id,req1)
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setMsg("Application Submitted")
                    });
                }                
            });           
        }


        const handleInput=(ev)=>{
               setState((state)=>(
                {
                    ...state,
                    [ev.target.name]: ev.target.value 
                }
            ));
        }

        const handleFileInput=(ev)=>{
            console.log(ev.target.files[0])
            setState((state)=>(
             {
                 ...state,
                 [ev.target.name]: ev.target.files[0] 
             }
         ));
     }

     useEffect(()=>{
        fetch("http://localhost:8080/checklearningcompleted?citizen_id="+ JSON.parse(localStorage.getItem("loggeduser")).citizen_id).
        then(resp=>resp.json()).
        then(data=> {
            console.log(data)
            setFormEnable(data)
        })
    }, []) 

        return(
            <div style={{ backgroundImage:`url(${myimg})`, height:"500px", backgroundPosition:"center"}}>
                <div  className=" bg-secondary">  
                     <CitizenNavBar/>
                    <div className="container bg-secondary text-white" style={{display:formEnable?'block':'none'}}>
                        <form onSubmit={submitData}>
                            <h4>Permanent Licence Application</h4>
                            <div className="form-row row g-3">
                                <div className="form-group col-md-4">
                                    <label htmlFor="fname">First Name</label>
                                    <input type="text" className="form-control" name= "fname" id="fname" value={state.citizen.fname} placeholder="First Name" onChange={handleInput}  required/>
                                
                                    <label htmlFor="lname">Last Name</label>
                                    <input type="text" className="form-control" name= "lname" id="lname" value={state.citizen.lname} placeholder="Last Name" onChange={handleInput}  required/>
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="contact_no">Contact Number</label>
                                    <input type="text" className="form-control" name= "contact_no" id="contact_no" value={state.citizen.contact_no} placeholder="Contact Number" onChange={handleInput}  required/>
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="aadhar">Aadhar Card Number</label>
                                    <input type="text" className="form-control" name= "aadhar" id="aadhar" placeholder="Aadhar Card Number" onChange={handleInput} minLength="12" pattern="[0-9]+" required/>
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" name="email" id="email" value={state.citizen.user.email} placeholder="Email" onChange={handleInput}  pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.com$" required/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="dob">Date of Birth</label>
                                    <input type="date" className="form-control" name="dob" id="dob"  onChange={handleInput}  required/>
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="gender">Gender   </label><br/>
                                    <input type="radio"  id="gen" name="gender" value="male" onChange={handleInput} required />Male
                                    <input type="radio"  id="gen" name="gender" value="female" onChange={handleInput} required/>Female
                                    <input type="radio"  id="gen" name="gender" value="other" onChange={handleInput} required/>Other
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="identification_mark">Identification_mark</label>
                                    <input type="text" className="form-control" name="identification_mark" id="identification_mark" placeholder="" onChange={handleInput}  />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="blood_group">Blood Group</label>
                                    <select name='blood_group' onChange={handleInput} id='blood_group'required>
                                        <option value="A-">A-</option>
                                        <option value="A+">A+</option>
                                        <option value="B-">B-</option>
                                        <option value="B+">B+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="O-">O-</option>
                                        <option value="O+">O+</option>
                                    </select>
                                </div>
                               
                                <div className="form-group col-md-6">
                                    <label htmlFor="present_address">Present Address </label>
                                    <textarea type="text" className="form-control" name="present_address" id="present_address" placeholder="" onChange={handleInput}required/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="permanent_address">Permanent Address</label>
                                    <textarea type="text" className="form-control" name="permanent_address" id="permanent_address" placeholder="" onChange={handleInput}  required  />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="aadhar_card">Upload Aadhar Card</label>
                                    <input type="file" className="form-control" name="aadhar_card" id="aadhar_card"  onChange={handleFileInput}  required  />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="signature">Upload Signature</label>
                                    <input type="file" className="form-control" name="signature" id="signature"  onChange={handleFileInput}  required  />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="photograph">Upload Photograph</label>
                                    <input type="file" className="form-control" name="photograph" id="photograph"  onChange={handleFileInput}  required  />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        <p>{msg}</p>
                </div>
                <div style={{display:formEnable?'none':'block'}}>
                    <p>You not eligible for Permanent Licence </p>
                    <p>Apply for Learning <a href="/learningform">CLICK HERE</a> </p>
                </div>
             </div>
        </div>
        )
    
}