
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import CustomLink from '../CustomLink';

export default function Home() {
	{/*const sections = [
		{
			id: 1,
			section: "Containers",
			body: "Container Stuff",
			icon: "fas fa-box-open",
			link: "/containers"
		},
		{
			id: 2,
			section: "Search",
			body: "Search Stuff",
			icon: "fas fa-search",
			link: "/search"
		},
		{
			id: 3,
			section: "Reports",
			body: "Report Stuff",
			icon: "fas fa-file-alt",
			link: "/reports"
		},
		{
			id: 4,
			section: "Dashboard",
			body: "Dashboard Stuff",
			icon: "fas fa-tachometer-alt",
			link: "/dashboard"
		}
	];*/}
	return (
		<>
			<div className="grid-container">
			{/*}
				{sections.map(section => (
					<CustomLink to={section.link}>
						<div className="card" key={section.id}>
							<h1>{section.section}</h1>
							<p>{section.body}</p>
							<p><FontAwesomeIcon icon={section.icon} /></p>
						</div>
					</CustomLink>
				))}
			*/}

				<div className="card">
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
				
				<div className="card">
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

				<div className="card">
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
			</div>
		</>
	)
}