import React, { useState, Component } from 'react';
import '../assets/css/Body.css';
import Contacts from './Contacts.js';
import Skills from './Skills.js';


const Body = () =>{

return(
	<section>
		<section className="body__leftside">
			<Contacts />
			<Skills />
		</section>
		<section className="body__rightside">
aaaa
		</section>
	</section>

	)

}

export default Body;