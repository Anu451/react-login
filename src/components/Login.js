import React from 'react';
import { useState } from 'react';
// import './login.css';
import './style.css';

function Login() {
	const initialValue = { userid: '', password: '' };
	const [fromValue, setFormValue] = useState(initialValue);
	const [errorMsg, setErrorMsg] = React.useState('');

const handelClick = (e) => {
	e.preventDefault();
	setErrorMsg('Valid User');
};
	

	const handleChange = (e) => {
		console.log(e.target);
		const { name, value } = e.target;
		setFormValue({ ...setFormValue, [name]: value });
	};

	// const handelSubmit = (e) => {
	// 	e.preventDefault();
	// 	setFormError(validate(fromValue));
	// };

	// const validate = (values) => {
	// 	const errors = {};
	// 	const regex = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$';

	// 	if (!values.userid) {
	// 		errors.userid = 'UserId is Required';
	// 	}
	// 	if (!values.password) {
	// 		errors.userid = 'UserId is Required';
	// 	}
	// 	return errors;
	// };

	return (
		<div className="container">
			<form>
				<h1 className="form-head">LogIn</h1>

				{errorMsg && <div className="error">{errorMsg}</div>}

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

				<button className="form-button" onClick={handelClick}>
					Login
				</button>

				<div className="link-signup">
					<a href="/register">Don't have account ? Sign Up</a>
				</div>

				<div className="link-forgotPassword">
					<a href="/resetpassword">Forgot Password?</a>
				</div>
			</form>
		</div>
	);
}

export default Login;
