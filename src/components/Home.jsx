import '@/styles/Home.css'
import NavBar from '@/components/NavBar'
import Spacer from './Spacer'
import Section from './Section'

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
			<Section></Section>
			<Spacer></Spacer>
			<Spacer></Spacer>
			<div className="App-purchase">
				<h1 className="purchase-header">Join the waitlist today</h1>
				<button className="button">Register</button>
			</div>
		</div>
	)
}
