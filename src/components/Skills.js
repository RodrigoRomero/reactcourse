import React, { useState, Component } from 'react';

import {List} from '@mui/material';
import SkillsItem from './SkillsItem.js';

const Skills = () =>{

	const skills =[
		{item:"Scrum Master", rating:"5"},
		{item:"Agile Metodologies", rating:"4"},
		{item:"PHP", rating:"3"},
		{item:"JavasScript", rating:"2"},
		{item:"React", rating:"1"},
	];

	return(
		<div>
			<List >
				{skills.map((skill,i) => <SkillsItem key={i} item={skill.item} rating={skill.rating} />)}
			</List>
		</div>
		);
}

export default Skills;