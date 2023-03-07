import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'
import Spacer from './Spacer'
import Section from './Section'

export default function Home() {
	return (
		<div className={styles.App}>
			<NavBar></NavBar>
			<div className={styles.AppMain}>
				<div className={styles.AppWrapper}>
					<h1 className={styles.AppHeading}>The Final Frontier</h1>
					<div className={styles.AppText}>
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
			<div className={styles.AppPurchase}>
				<h1 className={styles.PurchaseHeader}>Join the waitlist today</h1>
				<button className={styles.button}>Register</button>
			</div>
		</div>
	)
}
