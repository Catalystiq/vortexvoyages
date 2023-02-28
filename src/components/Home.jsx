import '@/styles/Home.css'
import NavBar from '@/components/NavBar'

export default function Home() {
	return (
		<div className="App">
			<NavBar></NavBar>
			<div className="App-main">
				<div className="App-wrapper">
					<h1 className="App-heading">The Final Frontier</h1>
					<div className="App-text">
						<p>
							Take a trip into the next step of human exploration, and
							experience something unlike anything else
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
