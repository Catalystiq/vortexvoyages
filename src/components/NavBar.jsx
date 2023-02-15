import '@/styles/NavBar.css'

export default function NavBar() {
	return (
		<div className="NavBar">
			<div className="NavBar-logo">
				<img src="./img/planet.png" alt="Planet logo" />
			</div>
			<div className="NavBar-links">
				<div className="NavBar-link">
					<a href="#">Pricing</a>
				</div>
				<div className="NavBar-link">
					<a href="#">Updates</a>
				</div>
				<div className="NavBar-link">
					<a href="#">Launches</a>
				</div>
				<div className="NavBar-link">
					<a href="#">Contact</a>
				</div>
			</div>
		</div>
	)
}