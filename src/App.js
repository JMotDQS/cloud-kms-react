import Navbar from './Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import Reports from './pages/Reports';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<Navbar />
			<div className="main-container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/search" element={<Search />} />
					<Route path="/reports" element={<Reports />} />
				</Routes>
			</div>
		</>
	)
}

export default App;
