import React, { useState, Component } from 'react';

import FormInputWrapper from './FormInputWrapper';
import FormButton from './FormButton';

const Form = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('')


 const submitTestHandler = (event) =>{
 	event.preventDefault();

 }	

 return (
 	<form onSubmit={submitTestHandler}>
 		<FormInputWrapper data={props.data.frmInputs} /> 	
 		<FormButton data={props.data.frmButton} />
 	</form>
	);
}

export default Form;

 //