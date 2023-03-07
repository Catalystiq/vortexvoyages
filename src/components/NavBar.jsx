import styles from '@/styles/NavBar.module.css'
import Image from 'next/image'

export default function NavBar() {
	return (
		<div className={styles.NavBar}>
			<div className={styles.NavBarLogo}>
				<img src="./img/planet.png" alt="Planet logo" />
			</div>
			<div className={styles.NavBarLinks}>
				<div className={styles.NavBarLink}>
					<a href="#">Pricing</a>
				</div>
				<div className={styles.NavBarLink}>
					<a href="#">Updates</a>
				</div>
				<div className={styles.NavBarLink}>
					<a href="#">Launches</a>
				</div>
				<div className={styles.NavBarLink}>
					<a href="#">Contact</a>
				</div>
			</div>
		</div>
	)
}