import React, { useState,useEffect } from "react";
import { Form, useNavigate } from "react-router-dom";
import './signuppublic.css';
import { registerAPI } from "pages/APIRoutes";
import axios from "axios";


const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth)
        {
            navigate('/')
        }
    },[])

    const collectData = async () => {
        let result = await axios.post(registerAPI,{username, email,password});
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result));

        navigate('/');  
    }
    return (
        <div className="wrapper">
            <form action="">
                <h1>Register</h1>

                <div className="input-box" >
                    <input type="text"  value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username"/>
                </div>    
                    

                <div className="input-box" >
                    <input type="text"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
                </div>    

                   
                <div className="input-box" >
                    <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
                </div>   

                <button onClick={collectData} className="button" type="button">Sign Up</button>                

            </form>

        </div>
    )
}
export default SignUp;