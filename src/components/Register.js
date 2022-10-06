import React from 'react'
import { useState } from 'react';
// import './login.css'
import './style.css'

function Register() {

	const initialValue={ username:'',userid:'', password:'', repassword:''}
	const [fromValue, setFormValue] = useState(initialValue);

	const handleChange = (e) => {
		console.log(e.target);
		const { name, value } = e.target;
		setFormValue({ ...setFormValue, [name]: value });
	};


	return (
		<div className="container">
			<form action="">
				<h1 className="form-head">Register</h1>

				<div className="register-input">
					<input
						type="text"
						className="form-input"
						name="username"
						value={fromValue.username}
						placeholder="UserName"
						onChange={handleChange}
					/>
				</div>

				<div className="register-input">
					<input
						type="text"
						className="form-input"
						name="userid"
						value={fromValue.userid}
						placeholder="UserId"
						onChange={handleChange}
					/>
				</div>

				<div className="register-input">
					<input
						type="password"
						className="form-input"
						name="password"
						value={fromValue.password}
						placeholder="Password"
						onChange={handleChange}
					/>
				</div>

				<div className="register-input">
					<input
						type="password"
						className="form-input"
						name="repassword"
						value={fromValue.repassword}
						placeholder="Re-Enter password"
						onChange={handleChange}
					/>
				</div>

				<button className="form-button">Register</button>

				<div className="link-login">
					<a href="#">Login</a>
				</div>
			</form>
		</div>
	);
}

export default Register