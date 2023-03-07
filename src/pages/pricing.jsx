import styles from '@/styles/Pricing.module.css'
import NavBar from '@/components/NavBar'
import Spacer from '@/components/Spacer'

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
							<h3>$10,000</h3>
							<ul>
								<li>Comfortable Seating</li>
								<li>Expert Tour Guide</li>
								<li>Lorem ipsum</li>
								<li>Dolor sit amet.</li>
								<li>Lorem ipsum</li>
								<li>Dolor sit amet.</li>
							</ul>
						</div>
						<div className={styles.PricingColumn}>
							<h2>Buisness</h2>
							<h3>$10,000</h3>
							<ul>
								<li>Comfortable Seating</li>
								<li>Expert Tour Guide</li>
								<li>Lorem ipsum</li>
								<li>Dolor sit amet.</li>
								<li>Lorem ipsum</li>
								<li>Dolor sit amet.</li>
							</ul>
						</div>
						<div className={styles.PricingColumn}>
							<h2>First Class</h2>
							<h3>$10,000</h3>
							<ul>
								<li>Comfortable Seating</li>
								<li>Expert Tour Guide</li>
								<li>Lorem ipsum</li>
								<li>Dolor sit amet.</li>
								<li>Lorem ipsum</li>
								<li>Dolor sit amet.</li>
							</ul>
						</div>
					</div>
				</div>
				<Spacer></Spacer>
				<div className={styles.PricingText}>
					<h1>Lorem, ipsum dolor.</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
						ducimus, aut, enim a illo autem amet deserunt ratione sequi, eum
						assumenda vero? Voluptates, ratione distinctio.
					</p>
				</div>
			</div>
		</div>
	)
}
