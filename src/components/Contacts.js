import ContactsItem from './ContactsItem.js';

function Contacts(){

	const contacts =[
		{item:"Primary Mail", value:"rorigo.lolo.romero@gmail.com"},
		{item:"Other", value:"construirweb@hotmail.com"},
		{item:"Phone", value:"+5491167825824"},
	];

	return(
		<div>
			<ul>
				<ContactsItem contact={contacts[0]} />
				<ContactsItem contact={contacts[1]} />
				<ContactsItem contact={contacts[2]} />
				
			</ul>
		</div>
		);
}

export default Contacts;