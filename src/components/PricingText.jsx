import styles from '@/styles/PricingText.module.css'
import Spacer from '@/components/Spacer'

export default function PricingText() {
	return (
		<div className={styles.PricingTextWrapper}>
			<div className={styles.PricingTextGrid}>
				<div className={styles.PricingText}>
					<h1>Take a trip among the stars</h1>
					<p>
						Our passengers embark on a journey like no other into the final
						frontier of humankind: space.
					</p>
					<p>
						With our Moon and Mars packages, you can take extended stays on our
						colonies, enjoying our luxery resorts on an entirely different
						planet. Customers enjoy a variety of sights and activites: driving
						across the rough landscapes of Mars, seeing the original flag
						planted by Arnold Armstrong, and more.
					</p>
					<p>
						<a href="./info">Learn More</a>
					</p>
				</div>
				<Spacer></Spacer>
				<Spacer></Spacer>
				<div className={styles.PricingText}>
					<h1>Train with professionals</h1>
					<p>
						Before taking flight, all passengers take our training course to
						ensure maximum safety. A month before your launch date, you will be
						instructed to take our online course to learn about all of our
						safety systems and regulations.
					</p>
					<p>
						After completing the online course, you will be flown to our Zero-G
						Training Facility in Nevada. While there, you will use our pool to
						learn how to maneuver in Zero-G, and train using simulated drills.
						Our certified training staff will answer all questions and will
						train you personally. Finally, you will meet at our launch facility
						one day before your launch to get the final briefing and
						instructions. After that, it is off to the stars.
					</p>
					<p>
						<a href="./info">Learn More</a>
					</p>
				</div>
				<div className={styles.PricingText}>
					<h1>Next-Gen Technology</h1>
					<p>
						Vortext Voyages uses only the best of rocket technology, from
						propulsion, to navigation, to safety systems.
					</p>
					<p>
						The Venture line of rockets are the best space-faring vehicles of
						today. They will comfortably and safely carry you into the sky, so
						you can enjoy the awe-inducing sights of the great beyond.
					</p>
					<p>
						<a href="./info">Learn More</a>
					</p>
				</div>
			</div>
		</div>
	)
}
