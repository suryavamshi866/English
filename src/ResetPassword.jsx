import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleReset = () => {
        if (newPassword === confirmPassword) {
            // Backend password reset logic will go here
            setMessage('Password reset successfully!');
            console.log("Hi");
            navigate('/'); 
        } else {
            setMessage('Passwords do not match!');
        }
    };

    return (
        <div>
            <h2>Reset Password</h2>
            <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter New Password"
            />
            <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm New Password"
            />
            <button onClick={handleReset}>Reset Password</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ResetPassword;
