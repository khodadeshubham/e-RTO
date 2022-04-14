import React, { useState } from "react";
import validator from 'validator';
import AdminNavBar from "./AdminNavBar";
import CitizenNavBar from "./CitizenNavBar";

export default function CitizenRegister()
{
    const [msg,setMsg] = useState("");
    const[conMsg, setConMsg]= useState("");
    const[emailMsg,setEmailMsg]= useState("");

    const [PassErrorMessage, setPassErrorMessage] = useState("")

    const [emailFlag,setEmailFlag] = useState("false");
    const [passFlag,setPassFlag] = useState("false");
    const [contactFlag,setContactFlag] = useState("false");

    const [passColor,setPassColor] = useState("white");

    const[state, setState]= useState(
        {
            fname:"",
            lname:"",
            contact_no:"",
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

    const citizenreg=(ev)=>{
        ev.preventDefault();
        if(emailFlag === "true" && passFlag==="true"  && contactFlag==="true")
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
                        email: state.email,
                        password: state.pwd
                    })
            }
    
            fetch("http://localhost:8080/citizenreg", req)
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
            setMsg("Please fill valid Data")
        }
        
    }
    


    return(
        <div className="bg-secondary text-white" style={{height:"600px"}}>   
        <div className="container">
            <form onSubmit={citizenreg}>
                <div className="form-row col-md-12">
                     <div className="form-group col-md-6">
                        <h6 className="display-6">New User Registration</h6>
                        <label htmlFor="fname">First Name</label>
                        <input type="text" className="form-control" name= "fname" id="fname" placeholder="First Name" onChange={handleInput}  required/>
                        
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" className="form-control" name= "lname" id="lname" placeholder="Last Name" onChange={handleInput}  required/>
                        
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="contact_no">Contact Number</label>
                        <input type="text" className="form-control"  name= "contact_no" id="contact_no" placeholder="Contact Number" onChange={handleInput} onChange={handleInput} onBlur={contactValidate} required/>
                        <p style={{color:"red"}}>{conMsg}</p>
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" onChange={handleInput} onBlur={emailExist}  required/>
                        <p style={{color:"red"}}>{emailMsg}</p>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="pwd">Password</label>
                        <input type="password" className="form-control" name="pwd" id="pwd" placeholder="Password" onChange={handleInput} onBlur={passValidation}  required/>
                        <p style={{color:passColor}}>{PassErrorMessage}</p>
                        <button type="submit" className="btn btn-primary" >Sign Up</button>
                        <p >{msg}</p>                        
                    </div>
                </div>
                
         </form>
         
        </div>
        </div>
    )
}