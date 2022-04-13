import logo from '../assets/images/logo.svg';
import '../assets/css/Header.css';

function Header(){

	const fullname = "Rodrigo Romero";
	const province = "Buenos Aires";
	const country = "Argentina";
	const profilePicture = logo;

	return(
		<header className="header__test">
			<img src={profilePicture}  alt="logo" />
			<h1>{fullname}</h1>
			<h2>{province}, {country}</h2>
		</header>
		)

}

export default Header;