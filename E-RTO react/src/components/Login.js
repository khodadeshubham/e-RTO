import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainMenu from "./MainMenu";
import myStore from "./Store";
import myimg from '../images/RTOS.jpg';

export default function Login (){
    let navigate= useNavigate();
    const [errormsg,setErrormsg] = useState("");
    const [ state, setState]= useState(
        {
            email:"",
            pwd:"" ,
            citizen:{},
            staff:{}
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

    const login=(ev)=>{
        ev.preventDefault();
        //alert(this.state.email);
        //alert(this.state.pwd);
        const req= {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    email: state.email,
                    password: state.pwd
                })
        }

        fetch("http://localhost:8080/logincheck", req)
            .then(resp => resp.text())
            .then(data => {
                if(data.length != 0 )
                {
                    const json = JSON.parse(data);
                    if(json.role)
                    {
                        //console.log(json.role);
                        localStorage.setItem("loggeduser", JSON.stringify(json));
                        myStore.dispatch({type:'LOGGEDIN'});
                        navigate('/adminhome');
                    }    
                    else if(json.user.role)
                    {
                        if(json.user.role === "citizen")
                        {
                            localStorage.setItem("loggeduser", JSON.stringify(json));
                            myStore.dispatch({type:'LOGGEDIN'});
                             navigate('/citizenhome');
                        }
                        else if(json.user.role === "staff")
                        {
                            localStorage.setItem("loggeduser", JSON.stringify(json));
                            myStore.dispatch({type:'LOGGEDIN'});
                             navigate('/staffhome');
                        } 
                    }      
                }
                else
                    setErrormsg('Wring ID/pwd') ;     
            }) 



        /*fetch("http://localhost:8080/logincheck", req)
            .then(resp => resp.text())
            .then(data => {
                            alert(data);
                            if(data.length != 0)
                            {
                                const obj = JSON.parse(data);
                                alert(JSON.stringify(obj));
                                localStorage.setItem("loggeduser", JSON.stringify(obj));
                                let role = (JSON.parse(localStorage.getItem("loggeduser"))).user.role;
                                alert(role);
                                //console.log(role);
                                if(role === "staff")
                                {
                                    myStore.dispatch({type:'LOGGEDIN'});
                                    navigate('/staffhome');                                    
                                }
                                else if(role === "citizen")
                                {
                                    myStore.dispatch({type:'LOGGEDIN'});
                                    navigate('/citizenhome');
                                }
                                else
                                {
                                    navigate('/adminhome');
                                }
                            }
                            else
                            {
                                setState((state)=>(
                                    {
                                        ...state,
                                        errormsg: "Wrong ID/password"
                                    }
                                ));
                            }
                                
                                    
                         });   */
    }


        return (
            <div style={{ backgroundImage:`url(${myimg})`, height:"500px", backgroundPosition:"center"}}>
            <div className="container col-md-6">
                <div> 
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" name="email" id="email" placeholder="Email" onChange={handleInput}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Password</label>
                                <input type="password" className="form-control"  name="pwd" id="pwd" placeholder="Password" onChange={handleInput}/><br/>
                                <button type="submit" className="btn btn-danger" onClick={login}>LOGIN</button>
                                <p className="text-danger">{errormsg}</p>
                            </div>
                        </div>
                        
                    </form>
                 </div>
            </div>
            </div>
        )
    
    
}