import { ErrorResponse } from '@remix-run/router';
import React from 'react';
import { useState } from 'react';
// import './login.css'
import './style.css';

function Register() {
	const initialValue = {
		username: '',
		userid: '',
		password: '',
		repassword: '',
	};
	const [fromValue, setFormValue] = useState(initialValue);
	const [fromError, setFormError] = useState({});

	const handleChange = (e) => {
		console.log(e.target);
		const { name, value } = e.target;
		setFormValue({ ...setFormValue, [name]: value });
	};

	const handelSubmit = (e) => {
		e.preventDefault();
		setFormError(validate(fromValue));
	};

	const validate = (values) => {
		const errors = {};
		const regex = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$';

	 	if (!values.username) {
			errors.username = 'UserName is Required';
		}
		if (!values.userid) {
			errors.userid = 'UserID is Required';
		}

		if (!values.password) {
			errors.userid = 'UserID is Required';
		}
      
		if (!values.repassword) {
			errors.repassword = 'Re-Enter the Password';
		}
		return errors;
	};

	return (
		<div className="container">
			<form onSubmit={handelSubmit}>
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
					<a href="/">Login</a>
				</div>
			</form>
		</div>
	);
}

export default Register;
