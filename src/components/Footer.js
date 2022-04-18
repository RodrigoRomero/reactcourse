import React, { useState, Component } from 'react';
import {Container, Grid, Box} from '@mui/material';
import Classes from '../assets/css/Footer.module.css';

const Footer = (props) =>{
	
	const footerInfo = {
		'en-US':{
			"disclaimer": "All rights reserved"
		},
		'es-SP': {
			"disclaimer": "Todos los derechos reservados"
		},
		'pt-PT': {
			"disclaimer": "Tudos os direitos reservados"
		}
	}

	return(
		<Grid container spacing={2} className={Classes.footer__test}>
			<Grid item xs={4}>
			    {footerInfo[props.userLanguage].disclaimer}
		 	</Grid>
		 	<Grid item xs={4}>
			    acá viene el footer
		 	</Grid>
		 	<Grid item xs={4} className={Classes.u}>
			    acá viene el footer
		 	</Grid>
		 	
		</Grid>
		);

}

export default Footer;