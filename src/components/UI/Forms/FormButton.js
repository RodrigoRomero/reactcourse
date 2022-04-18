import React, { useState, Component } from 'react';

import Button from '@mui/material/Button';

const FormButton = (props) => {

	return (
		<Button type={props.data.type} variant="contained">{props.data.value}</Button>
		
	);

}


export default FormButton;