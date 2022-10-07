import React from 'react';
import './style.css';
import { useState } from 'react';

function Resetpassword() {
	const initialValue = { resetpassword: '', confirmpassword: '' };
	const [fromValue, setFormValue] = useState(initialValue);

	const handelChange = (e) => {
		console.log(e.target);
		const { name, value } = e.target;
		setFormValue({ ...setFormValue, [name]: value });
	};

	return (
		<div className="container">
			<form action="">
				<h1 className="form-head">Reset Password</h1>

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

					<button className="form-button">Reset</button>
				</div>

				<div className="link-login">
					<a href="#">Back to Login</a>
				</div>
			</form>
		</div>
	);
}

export default Resetpassword;
