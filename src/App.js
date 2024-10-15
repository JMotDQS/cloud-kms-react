import React from 'react';
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
	return (
		<>
			<Navbar />

			{/*<Store>
				<EmployeesComponent />
			</Store>*/}

			<div className="main-container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/containers" element={<Containers />} />
					<Route path="/search" element={<Search />} />
					<Route path="/reports" element={<Reports />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/labels" element={<Labels />} />
					<Route path="/checkin" element={<CheckIn />} />
					<Route path="/checkout" element={<CheckOut />} />
				</Routes>
			</div>
		</>
	)
}

export default App;
