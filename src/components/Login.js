import React from 'react';
import { useState } from 'react';
// import './login.css';
import './style.css'

function Login() {

	const initialValue = { userid: '', password: '' };
const [fromValue, setFormValue] = useState(initialValue);

const handleChange=(e)=>{
	console.log(e.target);
	const{name,value}=e.target
	setFormValue({...setFormValue,[name]:value})
};

	return (
		<div className="container">
			<form action="">
				<h1 className="form-head">LogIn</h1>

				<div className="input-container">
					<input
						className="form-input"
						name="userid"
						type="text"
						placeholder="UserId"
						value={fromValue.userid}
						onChange={handleChange}
					/>
				</div>

				<div className="input-container">
					<input
						className="form-input"
						type="password"
						name="password"
						placeholder="Password"
						value={fromValue.password}
						onChange={handleChange}
					/>
				</div>

				<button className="form-button">Login</button>

				<div className="link-signup">
					<a href="#">Don't have account ? Sign Up</a>
				</div>

				<div className="link-forgotPassword">
					<a href="#">Forgot Password?</a>
				</div>
			</form>
		</div>
	);
}

export default Login;
