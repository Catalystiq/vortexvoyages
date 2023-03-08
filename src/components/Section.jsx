import styles from '@/styles/Section.module.css'
import Spacer from './Spacer'

export default function Section() {
	return (
		<div className={styles.Section}>
			<div className={styles.SectionContent}>
				<div className={styles.SectionItem}>
					<img
						className={styles.SectionImage}
						src="https://storage.googleapis.com/vortexvoyages-images/images/planet.png"
						alt="Planet Icon"
						width={100}
					/>
					<h2>Travel Beyond</h2>
				</div>
				<div className={styles.SectionItem}>
					<img
						className={styles.SectionImage}
						src="https://storage.googleapis.com/vortexvoyages-images/images/astronaut.png"
						alt="Astronaut Icon"
						width={100}
					/>
					<h2>Professional Training</h2>
				</div>
				<div className={styles.SectionItem}>
					<img
						className={styles.SectionImage}
						src="https://storage.googleapis.com/vortexvoyages-images/images/rocket.png"
						alt="Rocket Icon"
						width={100}
					/>
					<h2>Next-Gen Rocket</h2>
				</div>
			</div>
		</div>
	)
}
