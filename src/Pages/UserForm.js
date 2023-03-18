  import React from "react";
  import { useState } from "react";
  import {useNavigate} from 'react-router-dom';

 const User_form_=()=>{
    const navigate = useNavigate();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [dob,setDob] = useState('');

  const onSubmitHandler = async(event) => {
    event.preventDefault();
    
    const myObject = {
        "UserName" : name,
        "Email is" : email,
        "Date of Birth is" : dob,
        "Phone no. is" : phone
    }

    const myJSON = JSON.stringify(myObject,null,2);
    navigate('/Database',{state:{id:1,name:myJSON}});

//     const res = await fetch("/register",{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify({
//             email
//         })
//     });
//     const data = await res.json();
//         console.log(data);

//         if (data.status === 401 || !data) {
//             console.log("error")
//         } else {
//             // setShow(true);
//             setEmail("")
//             console.log("Email sent")
//         }
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
                            value={email}
                             onChange = {(e)=>setEmail(e.target.value)} required/>
                        </div>

                        <div>
                            <label for="phone">Phone Number</label>
                            <input type="digit" id="phone" 
                            onChange ={(e)=>setPhone(e.target.value)}required/>
                        </div>

                        <button type="submit" disabled={!greater_than} onClick={onSubmitHandler}>Submit</button>
                        </form>
                        </div>
                </div>
      </div>
        
    );
}

export default User_form_;
