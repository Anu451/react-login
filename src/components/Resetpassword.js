import React from 'react';
import './style.css';
import { useState } from 'react';

function Resetpassword() {
	const initialValue = { resetpassword: '', confirmpassword: '' };
	const [fromValue, setFormValue] = useState(initialValue);
	const [errorMsg, setErrorMsg] = React.useState('');

	const handelChange = (e) => {
		console.log(e.target);
		const { name, value } = e.target;
		setFormValue({ ...setFormValue, [name]: value });
	};


	const handelClick = (e) => {
		e.preventDefault();
		setErrorMsg('Valid User');
	};
	
	// const handelSubmit = (e) => {
	// 	e.preventDefault();
	// 	setFormError(validate(values));
	// };

	// const validate = (values) => {
	// 	const errors = {};
	// 	const regex = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$';

	// 	if (!values.resetpassword) {
	// 		errors.resetpassword = 'Password is Required';
	// 	}
	// 	if (!values.confirmpassword) {
	// 		errors.confirmpassword = 'Renter the Password';
	// 	}
	// 	return errors;
	// };

	return (
		<div className="container">
			<form action="">
				<h1 className="form-head">Reset Password</h1>

				{errorMsg && <div className="error">{errorMsg}</div>}

				<div className="resetPassword-input">
					<input
						type="password"
						className="form-input"
						name="resetpassword"
						value={fromValue.resetpassword}
						placeholder="Password"
						onChange={handelChange}
					/>
				</div>

				<div className="resetPassword-input">
					<input
						type="password"
						className="form-input"
						name="confirmpassword"
						value={fromValue.confirmpassword}
						placeholder="Re-enter Password"
						onChange={handelChange}
					/>

					<button className="form-button" onClick={handelClick}>Reset</button>
				</div>

				<div className="link-login">
					<a href="/">Back to Login</a>
				</div>
			</form>
		</div>
	);
}

export default Resetpassword;
