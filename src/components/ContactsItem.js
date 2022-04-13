function ContactsItem(props){

	return(
		<li>{props.contact.item} * {props.contact.value}</li>
		);

};

export default ContactsItem;