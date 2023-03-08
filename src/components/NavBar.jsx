import styles from '@/styles/NavBar.module.css'
import Image from 'next/image'
import logo from '../../public/img/logo.png'

export default function NavBar() {
	return (
		<div className={styles.NavBar}>
			<div className={styles.NavBarLogo}>
				<a href="./">
					<Image src={logo} alt={'Vortex Voyages Logo'} height={65}></Image>
				</a>
			</div>
			<div className={styles.NavBarLinks}>
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
