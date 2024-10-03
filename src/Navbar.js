import logo from './DQS_logo.svg';
import CustomLink from './CustomLink';

function Navbar() {
	return (
		<>
			<nav id="nav">
				<img src={logo} id="logo-header" className="nav-logo" data-page='kms' alt="" />
				<ul className="nav-links">
					<CustomLink to="/reports">Reports</CustomLink>
					<li className="navbar-item nav-item-divider">|</li>
					<CustomLink to="/search">Inv. Search</CustomLink>
					<li className="navbar-item nav-item-divider">|</li>
					<CustomLink to="/">KMS</CustomLink>
				</ul>
			</nav>
		</>
	);
}

export default Navbar;