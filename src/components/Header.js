import logo from '../assets/images/logo.svg';
import '../assets/css/Header.css';

function Header(){

	return(
		<header className="header__test">
			<img src={logo}  alt="logo" />
			<h1>RR Header</h1>

		</header>
		)

}

export default Header;