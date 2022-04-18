import React, { useState, Component } from 'react';

const FormInput = (props) => {


	const [enteredUsername, setEnteredUsername] = useState('')


	const inputChangeHandler = (event) => {
		//console.log(event.target['name'])
		//console.log(event.target.value)
	}
	
	return (
		<div>
			<label>{props.data.label}</label>
			<input type={props.data.type} tabIndex={props.data.tabinex} name={props.data.name} className={props.data.label} placeholder={props.data.placeholder} onChange={inputChangeHandler}/>
		</div>
		
	);

}


export default FormInput;