import React, { useState } from "react";
import validator from 'validator';
import AdminNavBar from "./AdminNavBar";
import CitizenNavBar from "./CitizenNavBar";

export default function CitizenRegister()
{
    const [msg,setMsg] = useState("");

    const [errorMessage, setErrorMessage] = useState("")

    const [emailFlag,setEmailFlag] = useState("false");

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

    const emailExist=(ev)=>{
        //alert("hi");
        ev.preventDefault();
        fetch("http://localhost:8080/emailexist?email="+state.email)
            .then(resp => resp.text())
            .then(data => {
                console.log(data);
                if(data === "true")
                {
                    setMsg("Email already Used. Please Choose defferent Email ID") ;
                    setEmailFlag("false");
                }
                else
                {
                    setMsg("");
                    setEmailFlag("true");
                }
            }) 
    }

    const passValidation=(ev)=>{
        ev.preventDefault();
        //alert("pass")
        if (validator.isStrongPassword(state.pwd, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
          })) {
            setErrorMessage('Is Strong Password')
          } else {
            setErrorMessage('Is Not Strong Password')
          }
        /*var pass = state.pwd;
        var reg = '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/';
        var test = reg.test(pass);
        if (test) {
            alert('pass');
        } else{
            alert('fail');
        }*/
    }

    const citizenreg=(ev)=>{
        ev.preventDefault();
        if(emailFlag === "true")
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
        
    }
    


    return(
        <div className="bg-secondary text-white" style={{height:"500px"}}>   
        <div className="container">
            <form>
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
                        <input type="text" className="form-control" name= "contact_no" id="contact_no" placeholder="Contact Number" onChange={handleInput}  required/>
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" onChange={handleInput} onBlur={emailExist}  required/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="pwd">Password</label>
                        <input type="password" className="form-control" name="pwd" id="pwd" placeholder="Password" onChange={handleInput} onBlur={passValidation}  required/>
                        <button type="submit" className="btn btn-primary" onClick={citizenreg}>Sign Up</button>
                    </div>
                </div>
                
         </form>
         <p >{msg}</p>
         <p style={{color:"Red"}}>{errorMessage}</p>
        </div>
        </div>
    )
}