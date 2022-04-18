import React, { UseState } from 'react';

import ContactsItem from './ContactsItem.js';
import Form from './UI/Forms/Form';

const Contacts = () =>{



	const formBuilder ={
		"frmFunction": "submitTestHandler",
		"frmInputs": [
			{type:"text", label:"FullName", name:"full_name", "tabindex":1, "validate":true, "placeholder":"Full Name", "onchange": "userNameChangeHandler"},
			{type:"text", label:"Email", name:"frm-email", "tabindex":2, "validate":true, "placeholder":"Email"},
			{type:"text", label:"Title", name:"frm-email", "tabindex":3, "validate":true, "placeholder":"Title"},
		],
		"frmButton": {type:"submit", value: "Submit"}
	}

	const contacts =[
		{item:"Primary Mail", value:"rorigo.lolo.romero@gmail.com"},
		{item:"Other", value:"construirweb@hotmail.com"},
		{item:"Phone", value:"+5491167825824"},
	];

	return(
		<div>
		<Form data={formBuilder}/>
			<ul>
				<ContactsItem contact={contacts[0]} />
				<ContactsItem contact={contacts[1]} />
				<ContactsItem contact={contacts[2]} />
				
			</ul>
		</div>
		);
}

export default Contacts;