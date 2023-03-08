import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'
import Spacer from './Spacer'
import Section from './Section'
import PricingText from './PricingText'

export default function Home() {
	return (
		<div className={styles.App}>
			<NavBar></NavBar>
			<Spacer></Spacer>
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
			{/* Attribution */}
			<p className={styles.HomeAttribution}>
				Photo by{' '}
				<a href="https://unsplash.com/@danesduet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText%22%3E">
					Daniel Olah
				</a>{' '}
				on{' '}
				<a href="https://unsplash.com/photos/gEta6dbzFy0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText%22%3E">
					Unsplash
				</a>
			</p>
			<Section></Section>
			<Spacer></Spacer>
			<Spacer></Spacer>
			<PricingText></PricingText>
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
