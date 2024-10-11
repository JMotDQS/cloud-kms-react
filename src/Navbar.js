import logo from './DQS_logo.svg';
import NavbarCustomLink from './NavbarCustomLink';

function Navbar() {
	return (
		<>
			<nav id="nav">
				<div className="nav-logo-container">
					<img src={logo} id="logo-header" className="nav-logo" data-page='kms' alt="" />
				</div>
				<ul className="nav-links">
					{/*<NavbarCustomLink to="/containers">Containers</NavbarCustomLink>
					<li className="navbar-item nav-item-divider">|</li>
					<NavbarCustomLink to="/search">Search</NavbarCustomLink>
					<li className="navbar-item nav-item-divider">|</li>
					<NavbarCustomLink to="/reports">Reports</NavbarCustomLink>
					<li className="navbar-item nav-item-divider">|</li>
					<NavbarCustomLink to="/dashboard">Dashboard</NavbarCustomLink>*/}
					<li className="navbar-item nav-item-divider">|</li>
					<NavbarCustomLink to="/">KMS</NavbarCustomLink>
					<li className="navbar-item nav-item-divider">|</li>
				</ul>
			</nav>
		</>
	);
}

export default Navbar;