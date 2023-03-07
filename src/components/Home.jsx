import '@/styles/Home.css'
import NavBar from '@/components/NavBar'
import Spacer from './Spacer'

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
			<Spacer></Spacer>
			<p>Blah blah blah</p>
			<Spacer></Spacer>
		</div>
	)
}
