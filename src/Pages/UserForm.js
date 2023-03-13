  import React from "react";
  import { useState } from "react";
  import { send } from 'emailjs-com';
  import {Link, Routes, Route, useNavigate, BrowserRouter} from 'react-router-dom';
  import Database from './Database';



 const Form=()=>{
    // const [start_date,setStart_date]=useState(new Date());
    const navigate = useNavigate();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [dob,setDob] = useState('');
    const [message,setMessage] = useState('');

  const onSubmitHandler = event => {
    event.preventDefault();

    // const onNameChange = (e) =>{
    //     setName(e.target.value);
    // }
    // const onEmailChange = (e) =>{
    //     setEmail(e.target.value);
    // }
    // const onPhoneChange = (e) =>{
    //     setPhone(e.target.value);
    // } 

    // <div>name is {phone}</div>
    // check(dob);
    setMessage(`Name is -  ${name} 
    Email is - ${email} 
    Date of Birth - ${dob}
    Phone no. is - ${phone}`);

    // 👇️ redirect to /Database
    // navigate('/Database');
  };

    const [greater_than,setGreater_than]=useState(false);

    const calculate_age=(event)=>{
        var today = new Date();
        var birthDate = new Date(event);
        var age_now = today.getFullYear() - birthDate.getFullYear();
        var month = today.getMonth() - birthDate.getMonth();
        if(month < 0 || (month===0 && today.getDate() < birthDate.getDate())){
            age_now--;
        }
        console.log(age_now);
        return age_now;
    }

    const check = (start_date) => {
        if(calculate_age(start_date)<17){
            alert("Age is less than 18");
            setGreater_than(false);
        }else{
            setGreater_than(true);
        }
        
    }


    return(
        <div class="container py-5 h-00">
            <div class="row d-flex justify-content-center align-items-center h-100">
                {/* <div class="col-12 col-md-8 col-lg-6 col-xl-5"> */}
                    <div class="card-body p-5 text-center">
                    <form>
                            <div>
                            <label for="name">Name</label>
                            <input type="text" id="name" placeholder="enter name" 
                            onChange = {(e)=> setName(e.target.value)} required/>
                            </div>

                        <div>
                            <label for="dateOfBirth">Date Of Birth</label>
                            <input type="date" id="dateOfBirth" required 
                            onChange={(event) =>{setDob(event.target.value);
                            check(event.target.value)}}/>
                        </div>
                        
                        <div>
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="enter email" 
                             onChange = {(e)=>setEmail(e.target.value)} required/>
                        </div>

                        <div>
                            <label for="phone">Phone Number</label>
                            <input type="digit" id="phone" 
                            onChange ={(e)=>setPhone(e.target.value)}required/>
                        </div>

                        <button type="submit" disabled={!greater_than} onClick={onSubmitHandler}>Submit</button>
                        </form>
                        <p>{message}</p>
                        </div>
                </div>
            {/* </div> */}
      </div>
        
    );
}

export default Form;