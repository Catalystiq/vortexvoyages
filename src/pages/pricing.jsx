import styles from '@/styles/Pricing.module.css'
import NavBar from '@/components/NavBar'
import Spacer from '@/components/Spacer'
import PricingText from '@/components/PricingText'

export default function Pricing() {
	return (
		<div className={styles.Pricing}>
			<NavBar></NavBar>
			<div className={styles.PricingWrapper}>
				<Spacer></Spacer>
				<Spacer></Spacer>
				<div className={styles.PricingHeader}>Pricing Plans</div>
				<div className={styles.PricingTable}>
					<div className={styles.PricingColumns}>
						<div className={styles.PricingColumn}>
							<h2>Economy</h2>
							<p>Starting At</p>
							<h3>$10,000</h3>
							<ul>
								<li>Low Orbit Trip</li>
								<li>Professional Tour Guide</li>
								<li>Two Day Training Course Prior to Takeoff</li>
							</ul>
						</div>
						<div className={styles.PricingColumn}>
							<h2>Buisness</h2>
							<p>Starting At</p>
							<h3>$100,000</h3>
							<ul>
								<li>
									Trip to the <b>Moon</b>
								</li>
								<li>One Week Stay on Moon Colony</li>
								<li>Guided Tour Around the Moon</li>
								<li>One Week Training Course Prior to Takeoff</li>
							</ul>
						</div>
						<div className={styles.PricingColumn}>
							<h2>First Class</h2>
							<p>Please</p>
							<h3>Contact for Pricing</h3>
							<ul>
								<li>
									Take a trip to <b>Mars</b>
								</li>
								<li>Take extended stay on Mars Colony</li>
								<li>Guided Tour during the trip and on Mars</li>
								<li>Three Week Training Course Prior to Takeoff</li>
							</ul>
						</div>
					</div>
				</div>
				<Spacer></Spacer>
				<Spacer></Spacer>
				<PricingText></PricingText>
				<Spacer></Spacer>
			</div>
		</div>
	)
}
