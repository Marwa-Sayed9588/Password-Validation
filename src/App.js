import React, { useState } from "react";
import validator from 'validator';
import './App.css';

const App = () => {
	const [errorMessage, setErrorMessage] = useState('');

	const isCommonPassword = (value) => {
		const commonPasswords = ['123456', 'password', '123456789', '12345678', '12345', '1234567', '1234'];
		return commonPasswords.includes(value);
	};

	const validate = (value) => {
		if (value.length < 8) {
			setErrorMessage('Password must be at least 8 characters long.');
		} else if (isCommonPassword(value)) {
			setErrorMessage('Password is too common. Please choose a stronger password.');
		} else if (validator.isStrongPassword(value, {
			minLength: 8, minLowercase: 1,
			minUppercase: 1, minNumbers: 1, minSymbols: 1
		})) {
			setErrorMessage('Is Strong Password');
		} else {
			setErrorMessage('Is Not Strong Password');
		}
	};

	return (
		<div style={{ height:'300px',width:'500px',backgroundColor:'#bfe0e0',marginLeft: '650px',  marginTop:'200px'}}>
			<pre>
				<h2 style={{  marginTop: '130px',fontSize: '24px'}}>Checking Password Strength in ReactJS</h2>
				<span>Enter Password: </span>
				<input
					type="text"
					onChange={(e) => validate(e.target.value)}
				></input>
				<br />
				{errorMessage === '' ? null :
					<span style={{
						fontWeight: 'bold',
						color: 'red',
					}}>{errorMessage}</span>}
			</pre>
		</div>
	);
}

export default App;
