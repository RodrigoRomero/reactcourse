import React, { useState, Component } from 'react';

import FormInput from './FormInput';
const FormInputWrapper = (props) => {
	
	
	return (
		<div className="form-group">
			<FormInput data={props.data[0]} />
			<FormInput data={props.data[1]}/>
			<FormInput data={props.data[2]}/>
		</div>

		);
}  


export default FormInputWrapper;