import Navbar from './Navbar'
import Home from './pages/Home'
import Search from './pages/Search'
import Reports from './pages/Reports'

function App() {
	let component;
	switch(window.location.pathname) {
		case "/":
			component = <Home />
			break;

		case "/search":
			component = <Search />
			break;

		case "/reports":
			component = <Reports />
			break;

		default:
			break;
	}
	return (
		<>
			<Navbar />
			{component}
		</>
	)
}

export default App;
