import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginpolice.css';
import axios from 'axios';
import { loginAPI } from 'pages/APIRoutes';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    }, [navigate]);

    // const handleLogin = async (e) => {
    //     e.preventDefault(); // Prevent default form submission behavior

    //     try {
    //         const response = await axios.post(loginAPI, { email, password });

    //         // Assuming the response contains the user data g
    //         const user = response.data;
    //         // console.log(user.user.email);

    //         if (user.user.email) {
    //             localStorage.setItem('user', JSON.stringify(user));
    //             if (user.user.role === 'founder') {
    //                 navigate('/founder');
    //             } else {
    //                 navigate('/');
    //             }
    //         } else {
    //             alert('Please enter the correct details');
    //         }
    //     } catch (error) {
    //         console.error('Error during login:', error);
    //         alert('An error occurred during login. Please try again.');
    //     }
    // };

    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post(loginAPI, { email, password });
    
            const user = response.data;
    
            console.log("User object:", user); // Add this line to check the structure of the user object
    
            if (user.user.email) {
                localStorage.setItem('user', JSON.stringify(user));
            
                // Assuming the role is nested under user.user.role
                if (user.user.role === 1) {
                    navigate('/admin/police');
                } else {
                    navigate('/user/people');
                }
            } else {
                alert('Please enter the correct details');
            }
            
        } catch (error) {
            navigate('/signup');
            console.error('Error during login:', error);
            
            alert('An error occurred during login. Please try again.');
        }
    };
    

    return (
        <div className='wrapper'>
            <form>
                <h1>Login</h1>
                <div className='input-box'>
                    <input
                        type='text'
                        placeholder='Email-iD'
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className='input-box'>
                    <input
                        type='password'
                        placeholder='FIR-ID'
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>

                <div className='remember-forgot'>
                    <label>
                        <input type='checkbox' />Remember me
                    </label>
                    <a href='#'>Forgot password?</a>
                </div>
                <button className='button' type='submit' onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
