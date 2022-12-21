import './App.css'
import './NavBar.css'

function App() {
	return (
		<div className="App">
			<NavBar></NavBar>
			<header className="App-header">
				<h1 className="App-spin">SPAAAAAAACE</h1>
				<div className="App-text">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
						tenetur, vel architecto numquam laborum tempora molestiae vitae
						praesentium nemo qui unde minus? Culpa nobis doloribus esse sit,
						assumenda recusandae praesentium.
					</p>
				</div>
			</header>
		</div>
	)
}

function NavBar() {
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

export default App
