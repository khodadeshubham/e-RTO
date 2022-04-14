import React, { useState } from "react";
import myStore from "./Store";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import Home from "./Home";
import myimg from '../images/RTOS.jpg';
import AdminNavBar from "./AdminNavBar";
import validator from 'validator';

export default function StaffRegister()
{
    const [msg,setMsg] = useState("");
    const[nameMsg, setNameMsg]= useState("");
    const[conMsg, setConMsg]= useState("");
    const[emailMsg,setEmailMsg]= useState("");

    const [PassErrorMessage, setPassErrorMessage] = useState("")

    const [emailFlag,setEmailFlag] = useState("false");
    const [passFlag,setPassFlag] = useState("false");
    const [contactFlag,setContactFlag] = useState("false");
    const [nameFlag,setNameFlag] = useState("false");

    const [passColor,setPassColor] = useState("white");

    const[state, setState]= useState(
        {
            fname:"",
            lname:"",
            contact_no:"",
            designation:"",
            email:"",
            pwd:""
        }
    )

    const handleInput=(ev)=>{
        setState((state)=>(
            {
                ...state,
                [ev.target.name]: ev.target.value 
            }
        ));
    }


    const contactValidate=(ev)=>{
        ev.preventDefault();
        var phoneno = /^\d{10}$/;
        if (state.contact_no.match(phoneno) ) 
        {
            setConMsg("")
            setContactFlag("true");
          } else {
            setConMsg("Please enter valid Contact Number")
            setContactFlag("false");
          }
    } 

    const nameValidate=(ev)=>{
        ev.preventDefault();
        if (state.fname === null || state.fname=== "" || state.lname===null || state.lname==="") 
        {
            setNameMsg("Name canot be empty")
            setNameFlag("false");            
          } else {            
            setNameMsg("")
            setNameFlag("true");
          }
    } 

    const emailExist=(ev)=>{
        //alert("hi");
        ev.preventDefault();
        var pattern= /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.com$/;
        if(state.email.match(pattern))
        {
            fetch("http://localhost:8080/emailexist?email="+state.email)
            .then(resp => resp.text())
            .then(data => {
                console.log(data);
                if(data === "true")
                {
                    setEmailMsg("Email already Used. Please Choose defferent Email ID") ;
                    setEmailFlag("false");
                }
                else
                {
                    setEmailMsg("");
                    setEmailFlag("true");
                }
            }) 
        }
        else
        {
            setEmailMsg("Enter Valid email-ID") ;
            setEmailFlag("false");
        }
        
    }

    const passValidation=(ev)=>{
        ev.preventDefault();
        //alert("pass")
        if (validator.isStrongPassword(state.pwd, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
          })) {
            setPassErrorMessage('Strong Password')
            setPassColor("white");
            setPassFlag("true");
          } else {
            setPassErrorMessage('Strong Password is Not Strong')
            setPassColor("red");
            setPassFlag("false");
          }
       
    }

    const staffreg=(ev)=>{
        ev.preventDefault();
        if(emailFlag === "true" && passFlag==="true" && nameFlag === "true" & contactFlag==="true")
        {
            const req= {
                method: 'POST',
                headers: {
                    'content-type':'application/json'
                },
                body:JSON.stringify(
                    {
                        fname:state.fname,
                        lname:state.lname,
                        contact_no: state.contact_no,
                        designation:state.designation,
                        email: state.email,
                        password: state.pwd
                    })
            }
    
            fetch("http://localhost:8080/staffreg", req)
                .then(resp => resp.text())
                .then(data => {
                    if(data.length != 0)
                    {
                        setMsg("Registration Successfull...") ;
                    }
                    else
                    {
                        setMsg("Registration Failed...") ;
                    }
                })    
        }
        else{
            setMsg("Please fill valid Data") ;
        }
        
    }
    


    return(
        <div className="bg-secondary text-white" style={{height:"700px"}}>
                 <div >
                     <AdminNavBar/>
                 </div> 
        <div className="container ">
            <form>
                <div className="form-row">
                     <div className="form-group col-md-6">
                     <h6 className="display-6">New Staff Registration</h6>
                        <label htmlFor="fname">First Name</label>
                        <input type="text" className="form-control" name= "fname" id="fname" placeholder="First Name" onChange={handleInput} onBlur={nameValidate} required/>
                        <p style={{color:"red"}}>{nameMsg}</p>
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" className="form-control" name= "lname" id="lname" placeholder="Last Name" onChange={handleInput} onBlur={nameValidate} required/>
                        <p style={{color:"red"}}>{nameMsg}</p>
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="contact_no">Contact Number</label>                        
                        <input type="text" className="form-control" name= "contact_no" id="contact_no" placeholder="Contact Number" onChange={handleInput} onBlur={contactValidate} required/>
                        <p style={{color:"red"}}>{conMsg}</p>
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="designation">Designation</label>
                        <select className="form-control form-select" aria-label="Default select example" name= "designation" id="designation" placeholder="Designation" onChange={handleInput}  required>
                            <option >--Select Designation-- </option>
                            <option value="Permanent Licence Officer">Permanent Licence Officer</option>
                            <option value="Learning Licence Officer">Learning Licence Officer</option>
                        </select>
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" onChange={handleInput} onBlur={emailExist}  required/>
                        <p style={{color:"red"}}>{emailMsg}</p>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="pwd">Password</label>
                        <input type="password" className="form-control" name="pwd" id="pwd" placeholder="Password" onChange={handleInput} onBlur={passValidation} required/>
                        <p >{PassErrorMessage}</p>
                        <button type="submit" className="btn btn-primary" onClick={staffreg}>Sign Up</button>
                        <p >{msg}</p>
                    </div>
                </div>
                
         </form>
         
        </div>
        </div>
    )
}