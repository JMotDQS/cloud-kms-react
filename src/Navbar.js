import logo from './DQS_logo.svg';
import './navbar.css';

function Navbar() {
	return (
		<>
			<header>
				<img src={logo} id="logo-header" className="nav-logo" data-page='kms' alt="" />

				<nav id="nav">
					<ul className="nav-links">
						<li>
							<div className="search-container">
								<form className="nav-search-form" method="POST">
									<input id="nav-search-field" type="text" placeholder="User Search" name="nav-search-field" />
									<div className="nav-search-button">
										<i class="fa fa-search"></i>
										</div>
								</form>
							</div>
						</li>
						<li>
							<button id="search-clear-button">Clear</button>
						</li>
						<li>
							<button className="navbar-item navbar-link" href="/">Add User</button>
						</li>
						<li className="navbar-item nav-item-divider">|</li>
						<li>
							<button className="navbar-item navbar-link">Item Association</button>
						</li>
						<li className="navbar-item nav-item-divider">|</li>
						<li>
							<button className="navbar-item navbar-link">Generate Reports</button>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Navbar;