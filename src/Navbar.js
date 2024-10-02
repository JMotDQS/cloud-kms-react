import logo from './DQS_logo.svg';
import './navbar.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function Navbar() {
	return (
		<>
			<nav id="nav">
				<img src={logo} id="logo-header" className="nav-logo" data-page='kms' alt="" />
				<ul className="nav-links">
					<CustomNavbarLink to="/reports">Reports</CustomNavbarLink>
					<li className="navbar-item nav-item-divider">|</li>
					<CustomNavbarLink to="/search">Inv. Search</CustomNavbarLink>
					<li className="navbar-item nav-item-divider">|</li>
					<CustomNavbarLink to="/">KMS</CustomNavbarLink>
				</ul>
			</nav>
		</>
	);
}

function CustomNavbarLink({ to, children,  ...props }) {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });
	return (
		<li className={isActive ? "active":""}>
			<Link className="navbar-item navbar-link" to={to} {...props}>
				{children}
			</Link>
		</li>
	)
}

export default Navbar;