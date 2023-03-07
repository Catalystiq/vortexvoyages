import styles from '@/styles/Section.module.css'
import Spacer from './Spacer'

export default function Section() {
	return (
		<div className={styles.Section}>
			<div className={styles.SectionContent}>
				<div className={styles.SectionItem}>Item 1</div>
				<div className={styles.SectionItem}>Item 2</div>
				<div className={styles.SectionItem}>Item 3</div>
			</div>
		</div>
	)
}
