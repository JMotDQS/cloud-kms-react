
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
			section: "Labels",
			body: "Print QR Code VIN labels",
			icon: "fas fa-qrcode",
			link: "/labels",
			class: "card-home-labels"
		},
		{
			id: 2,
			section: "Check In",
			body: "Key Check In",
			icon: "fas fa-sign-in-alt",
			link: "/checkin",
			class: "card-home-checkin"
		},
		{
			id: 3,
			section: "Check Out",
			body: "Key Check Out",
			icon: "fas fa-sign-out-alt",
			link: "/checkout",
			class: "card-home-checkout"
		},
		{
			id: 4,
			section: "Search",
			body: "Lookup VINs & Slots",
			icon: "fas fa-search",
			link: "/search",
			class: "card-home-search"
		},
		{
			id: 5,
			section: "Reports",
			body: "Generate Any & All Reports",
			icon: "fas fa-file-alt",
			link: "/reports",
			class: "card-home-reports"
		},
		{
			id: 6,
			section: "Dashboard",
			body: "Dashboard Stuff",
			icon: "fas fa-tachometer-alt",
			link: "/dashboard",
			class: "card-home-dashboard"
		},
		/*{
			id: 2,
			section: "Containers",
			body: "Create, Fill, & Empty Containers",
			icon: "fas fa-box-open",
			link: "/containers",
			class: "card-containers"
		},*/
	];
	return (
		<>
			<div className="grid-container grid-container-home">
			
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