import { useState } from "react";

import axios from "axios";

import { ValidateUser } from './Utils';

const Login = () => {
	const [user, setUser] = useState({
		email: '',
		password: ''
	});

	const [result, setResult] = useState('');

	const onChange = (evt) => {
		const value = evt.target.value;
		const name = evt.target.name;
		setUser({
			...user,
			[name]: value
		});
	};

	const sendLogin = async () => {
		try {
			const res = await ValidateUser(user);
			setResult(res && res.code ? 'Invalid user' : 'Valid user'); //res = token
		}catch(err) {
			console.log('err in login.js ', err);
		}		
	};

	const handleLogout = () => {
		setResult('');
	};

	return  ( 
		<>
			<input 
				placeholder="Enter Email"
				type="text"
				onChange={onChange}
				data-testid="email"
				name="email"
			/><br />
			<input 
				placeholder="Enter password"
				type="password"
				onChange={onChange}
				data-testid="password"
				name="password"
			/>
			<br/>
			<button
				onClick={sendLogin} 
				data-testid="send-user-login"
			>
				Login
			</button>
			<br/>
			<h2 data-testid="token">{result}</h2>
		</>
	)
};

export default Login;