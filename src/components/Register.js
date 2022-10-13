import { ErrorResponse } from '@remix-run/router';
import React from 'react';
import { useState } from 'react';
// import './login.css'
import './style.css';

function Register() {
	const initialValue = {
		firstname: '',
		lastname:'',
		userid: '',
		designation:'',
		password: '',
		repassword: '',
	};
	const [fromValue, setFormValue] = useState(initialValue);
	const [errorMsg , setErrorMsg] = React.useState("");


	
	const handleChange = (e) => {
		console.log(e.target);
		const { name, value } = e.target;
		setFormValue({ ...setFormValue, [name]: value });
	};

	
const handelClick = (e) =>{
	e.preventDefault()
	setErrorMsg("Valid User")
}
	

	return (
		<div className="container">
			<form>
				<h1 className="form-head">Register</h1>

				{errorMsg && <div className="error" style={{padding:'1rem'}}>{errorMsg}</div>}

				<div
					className="register-input"
					style={{ display: 'flex', justifyContent: 'space-between' }}
				>
					<input
						style={{ width: '134px' }}
						type="text"
						className="form-input"
						name="FirstName"
						value={fromValue.firstname}
						placeholder="FirstName"
						onChange={handleChange}
					/>{' '}
					<span>
						<div
							className="lastname"
							style={{ padding: '0 0 0 0', width: '134px' }}
						>
							<input
								style={{}}
								type="text"
								name="LastName"
								className="form-input"
								value={fromValue.lastname}
								placeholder="LastName"
								onChange={handleChange}
							/>
						</div>
					</span>
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
						type="text"
						className="form-input"
						name="designation"
						value={fromValue.designation}
						placeholder="Designation"
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

				<button className="form-button" onClick={handelClick}>
					Register
				</button>

				<div className="link-login">
					<a href="/">Login</a>
				</div>
			</form>
		</div>
	);
}

export default Register;
