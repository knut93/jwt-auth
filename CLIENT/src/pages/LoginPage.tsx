import React from 'react'
import '../assets/LoginPage.css'

function LoginPage() {

    return (
        <div className="center">
            <h1>Login</h1>
            <form method="post">
                <div className="txt_field">
                    <input type="text" required />
                    <span></span>
                    <label>Username</label>
                </div>
                <div className="txt_field">
                    <input type="password" required />
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