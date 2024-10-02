import logo from './DQS_logo.svg';
import './navbar.css';

function Navbar() {
	return (
		<>
			<nav id="nav">
				<img src={logo} id="logo-header" className="nav-logo" data-page='kms' alt="" />
				<ul className="nav-links">
					{/*<li>
						<div className="search-container">
							<form className="nav-search-form" method="POST">
								<input id="nav-search-field" type="text" placeholder="User Search" name="nav-search-field" />
								<div className="nav-search-button">
									<i class="fa fa-search"></i>
									</div>
							</form>
						</div>
					</li>*/}
					<li>
					<a className="navbar-item navbar-link" href="/reports">Reports</a>
					</li>
					<li className="navbar-item nav-item-divider">|</li>
					<li>
						<a className="navbar-item navbar-link" href="/search">Inv. Search</a>
					</li>
					<li className="navbar-item nav-item-divider">|</li>
					<li>
						{/*<button className="navbar-item navbar-link" onClick={myFunction}>KMS</button>*/}
						<a className="navbar-item navbar-link" href="/">KMS</a>
					</li>
					{/*<li className="navbar-item nav-item-divider">|</li>
					<li>
						<button className="navbar-item navbar-link">Generate Reports</button>
					</li>*/}
				</ul>
			</nav>
		</>
	);
}

export default Navbar;