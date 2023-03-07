import styles from '@/styles/NavBar.module.css'
import Image from 'next/image'

export default function NavBar() {
	return (
		<div className={styles.NavBar}>
			<div className={styles.NavBarLogo}>
				<i>Vortex Voyages</i>
			</div>
			<div className={styles.NavBarLinks}>
				<div className={styles.NavBarLink}>
					<a href="./">Home</a>
				</div>
				<div className={styles.NavBarLink}>
					<a href="./pricing">Pricing</a>
				</div>
				<div className={styles.NavBarLink}>
					<a href="./info">Info</a>
				</div>
				<div className={styles.NavBarLink}>
					<a href="./contact">Contact</a>
				</div>
			</div>
		</div>
	)
}
