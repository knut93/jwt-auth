import React, { useState } from 'react'
import '../assets/LoginPage.css'
import axios from 'axios'

function LoginPage() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:3000/', { 
                username: username, 
                password: password 
            })
            .then((res) => {
                setUsername("");
                setPassword("");
                setMessage("User logged in successfully!");
            }
            )
            .catch((err) => {
                console.error(err);
            });
    }

    return (
        <div className="center">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>{message ? <p>{message}</p> : null}</div>
                <div className="txt_field">
                    <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" required />
                    <span></span>
                    <label>Username</label>
                </div>
                <div className="txt_field">
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" required />
                    <span></span>
                    <label>Password</label>
                </div>
                <div className="pass">Forgot Password?</div>
                <input type="submit" value="Submit" />
                <div className="signup_link">
                    Need access? <a href="#">Contact Admin</a>
                </div>
            </form>
        </div>
    )
}

export default LoginPage