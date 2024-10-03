import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function NavbarCustomLink({ to, children,  ...props }) {
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

export default NavbarCustomLink;