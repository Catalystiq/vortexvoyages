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
						<div className={styles.buttonWrapper}>
							<button
								type="button"
								className={styles.button}
								onClick={() => {
									window.location.href = './pricing'
								}}
							>
								Sign Up
							</button>
						</div>
					</div>
				</div>
			</div>
			<Section></Section>
			<Spacer></Spacer>
			<Spacer></Spacer>
			<div className={styles.AppPurchase}>
				<h1 className={styles.PurchaseHeader}>Join the waitlist today</h1>
				<button
					type="button"
					className={styles.button}
					onClick={() => {
						window.location.href = './pricing'
					}}
				>
					Sign Up
				</button>
			</div>
		</div>
	)
}
