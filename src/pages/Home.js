
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/home.css';

export default function Home() {
	return (
		<>
			<div className="grid-container">
				<h1>Home</h1>
				<p>
					<FontAwesomeIcon icon="fas fa-search" />
				</p>
				<p>
					<FontAwesomeIcon icon="fas fa-file-alt" />
				</p>
				<p>
					<FontAwesomeIcon icon="far fa-file-alt" />
				</p>
				<p>
					<FontAwesomeIcon icon="fas fa-box-open" />
				</p>
				<p>
					<FontAwesomeIcon icon="fas fa-cube" />
				</p>
				<p>
					<FontAwesomeIcon icon="fas fa-tachometer-alt" />
				</p>
				<p>
					<FontAwesomeIcon icon="fas fa-chart-line" />
				</p>
			</div>
		</>
	)
}