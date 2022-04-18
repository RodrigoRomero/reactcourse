import React, { useState, Component } from 'react';
import {ListItem, ListItemText, Rating} from '@mui/material';

const SkillsItem = (props) =>{

	return(
		<ListItem key={props.id} disableGutters={true}> 
		<ListItemText
                    primary={props.item}
                    
                  /><Rating name="half-rating" value={+props.rating} readOnly />
		</ListItem>
		);

};

export default SkillsItem;