import React, { Component } from "react";
import StaffNavBar from "./StaffNavBar";
import myimg from '../images/RTOS.jpg';

export default class ViewLearningAppClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            application:{}
        }
    }
    

    componentDidMount=()=>{
        var application_id= this.props.params.application_id

        alert(application_id)
        console.log(this.props.params.application_id)
         fetch("http://localhost:8080/getAppById/"+ application_id)
        .then(resp=>resp.json())
        .then(data=> {
            console.log(data)
            this.setState({application:data})
            //console.log(application.fname)
        })
    }

    render(){
        return(
        
            <div>
                
                 <div  style={{ backgroundImage:`url(${myimg})`, height:"500px", backgroundPosition:"center"}}>  
                    <div style={{ backgroundColor:"darkslateblue"}}>
                        <StaffNavBar/>
                    </div> 
                    <h3>View Application Page</h3>
                    <div className="container bg-secondary text-white">
    
                        {/*<p> first name : {this.state.application.citizen.fname}</p>
                         <form>
                            <h4>Learning Licence Application</h4>
                                <div className="form-row">
                                    <div>
                                        <p> {application.citizen.fname}</p>
                                        First Name: <input type="text" name="fname"  readOnly     /><br/>
                                        Last Name: <input type="text" name="lname"   readOnly/><br/>
                                        Contact: <input type="text" name="contact_no" readOnly/><br/>
                                        Email: <input type="text" name="email"  readOnly/><br/>
                                        Gender: <input type="text" name="gender" readOnly/><br/>
                                        Date of Birth: <input type="text" name="dob" readOnly/><br/>
                                        Blood Group: <input type="text" name="blood_group"  readOnly/><br/>
                                        Identification Mark: <input type="text" name="indentification_mark"  readOnly/><br/>
                                        Present Address: <input type="text" name="present_address" readOnly/><br/>
                                        Permanent Address: <input type="text" name="permanent_address"  readOnly/><br/>
                                        Aadhar Card: <file name="aadhar_card" /><br/>
                                        Photograph: <file name="photograph" /><br/>
        Signature: <file name="signature" /><br/>
                                    </div>
                                    <label htmlFor="application_status">Update Status</label>
                                        <select className="form-control form-select" aria-label="Default select example" name= "application_status" id="application_status"    required>
                                             <option value="pending">Pending</option>
                                             <option value="verified">Verified</option>
                                             <option value="completed">Completed</option>
                                        </select>
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={update}>Update</button>
                        </form>  */}
                    </div>
                </div>
            </div>
        )
    }
}

