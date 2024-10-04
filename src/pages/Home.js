
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

export default function Home() {
	const navigate = useNavigate();
	const onClickNavigate = (link) => {
		navigate(link);
	}

	const sections = [
		{
			id: 1,
			section: "Containers",
			body: "Create, Fill, & Empty Containers",
			icon: "fas fa-box-open",
			link: "/containers",
			class: "card-containers"
		},
		{
			id: 2,
			section: "Search",
			body: "Lookup VINs & Slots",
			icon: "fas fa-search",
			link: "/search",
			class: "card-search"
		},
		{
			id: 3,
			section: "Reports",
			body: "Generate Any & All Reports",
			icon: "fas fa-file-alt",
			link: "/reports",
			class: "card-reports"
		},
		{
			id: 4,
			section: "Dashboard",
			body: "Dashboard Stuff",
			icon: "fas fa-tachometer-alt",
			link: "/dashboard",
			class: "card-dashboard"
		}
	];
	return (
		<>
			<div className="grid-container">
			
				{sections.map(section => (
					<div className={`card ${section.class}`} key={section.id} onClick={() => onClickNavigate(section.link)}>
						<h1>{section.section}</h1>
						<p className="card-body">{section.body}</p>
						<p className="card-icon"><FontAwesomeIcon icon={section.icon} /></p>
					</div>
				))}
				
			</div>
		</>
	)
}