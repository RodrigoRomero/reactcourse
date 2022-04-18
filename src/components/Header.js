import React, { useState, Component } from 'react';
import logo from '../assets/images/logo.svg';
import classes from '../assets/css/Header.module.css';
import {Grid, Typography, ToggleButton, ToggleButtonGroup} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';

const Header = (props) =>{
	const [userLanguage, setUserLanguage] = useState(props.userLanguage);

	const personalInfo = {
		'en-US':{
			"fullname": "Rodrigo Romero ENG"
		},
		'es-SP': {
			"fullname": "Rodrigo Romero SP"
		},
		'pt-PT': {
			"fullname": "Rodrigo Romero PT"
		}
	}	
	
	const province = "Buenos Aires";
	const country = "Argentina";
	const profilePicture = logo;

	const changeLanguageHandler = (event) => {
		setUserLanguage(event.target.value)
		props.onLanguageChanged(event.target.value);
	}

	return(
		<Grid container spacing={2}>	
			<Grid item className={classes.header__test} xs={12}>
				<ToggleButtonGroup
      color="primary"
      value={userLanguage}
      exclusive
      onChange={changeLanguageHandler}
    >
      <ToggleButton value="en-US" key="en-US">English</ToggleButton>
      <ToggleButton value="es-SP" key="es-SP">Español</ToggleButton>
      <ToggleButton value="pt-PT"  key="pt-PT">Portugués</ToggleButton>
    </ToggleButtonGroup>



			 	
				<Typography variant="h1" component="h1" align="right">{personalInfo[userLanguage].fullname}</Typography>
				<Typography variant="h2" component="h2" align="right">{province}, {country}</Typography>
			</Grid>
		</Grid>
		)

}

export default Header;