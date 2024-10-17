import React from 'react';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import Containers from './pages/Containers';
import Search from './pages/Search';
import Reports from './pages/Reports';
import Dashboard from './pages/Dashboard';
import Labels from './pages/Labels';
import CheckIn from './pages/CheckIn';
import CheckOut from './pages/CheckOut';
//import Store from './Store';
//import EmployeesComponent from './EmployeesComponent';

function App() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		let mounted = true;

		fetch('http://localhost:5000/api/users')
			.then((result) => result.json())
			.then((data) => {
				//console.log(data);
				if(!mounted) {
					return;
				}

				setUsers(data);
				console.log(users);
			});
		
		return () => {
			mounted = false;
		};
	}, [])

	return (
		<>
			<Navbar />

			{/*<Store>
				<EmployeesComponent />
			</Store>*/}

			

			<div className="main-container">
				<ul>
					{users.map((user) => {
						<li key={user.pk_id}>{user.last_name}, {user.first_name} - ({user.emp_id})</li>
					})}
				</ul>

				{/*<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/containers" element={<Containers />} />
					<Route path="/search" element={<Search />} />
					<Route path="/reports" element={<Reports />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/labels" element={<Labels />} />
					<Route path="/checkin" element={<CheckIn />} />
					<Route path="/checkout" element={<CheckOut />} />
				</Routes>*/}
			</div>
		</>
	)
}

export default App;
