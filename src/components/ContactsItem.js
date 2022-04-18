import React, { useState, Component } from 'react';

const ContactsItem = (props) =>{

	return(
		<li>{props.contact.item} * {props.contact.value}</li>
		);

};

export default ContactsItem;