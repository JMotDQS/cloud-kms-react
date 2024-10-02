import Navbar from './Navbar'
import Home from './pages/Home'
import Search from './pages/Search'
import Reports from './pages/Reports'

function App() {
	let Component;
	switch(window.location.pathname) {
		case "/":
			Component = <Home />
			break;

		case "/search":
			Component = <Search />
			break;

		case "/reports":
			Component = <Reports />
			break;

		default:
			break;
	}
	return (
		<>
			<Navbar />
			<Component />
		</>
	)
}

export default App;
