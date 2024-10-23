import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [rollNo, setRollNo] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const validCredentials = '22311a6627';

        console.log('Roll No:', rollNo);
        console.log('Password:', password);

        if (rollNo && password) {
            // Check if both roll number and password match the example
            if (rollNo === validCredentials && password === validCredentials) {
                onLogin();
                navigate('/');
            } else {
                alert('Invalid credentials!');
            }
        } else {
            alert('Please enter roll number and password!');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                placeholder="Enter Roll Number"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
            />
            <button onClick={handleLogin}>Login</button>
            <br />
            <a href="/reset-password">Forgot Password?</a>
        </div>
    );
};

export default Login;
