import styles from '@/styles/Section.module.css'
import Spacer from './Spacer'

export default function Section() {
	return (
		<div className={styles.Section}>
			<div className={styles.SectionContent}>
				<div className={styles.SectionItem}>
					<img src="../public/img/planet" alt="Planet Icon" />
				</div>
				<div className={styles.SectionItem}>
					<img src="../public/img/astronaut" alt="Astronaut Icon" />
				</div>
				<div className={styles.SectionItem}>
					<img src="../public/img/rocket" alt="Rocket Icon" />
				</div>
			</div>
		</div>
	)
}
