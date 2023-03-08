// import styles from '@/styles/References.module.css'
// import NavBar from '@/components/NavBar'
// import Spacer from '@/components/Spacer'

// export default function References() {
//     <div className={styles.App}>
//     <NavBar></NavBar>
//     <Spacer></Spacer>
//     <Spacer></Spacer>
//         <div className={styles.referencesHeader}>Information</div>
//     </div>
// }

import styles from '@/styles/Info.module.css'
import NavBar from '@/components/NavBar'
import Spacer from '@/components/Spacer'

export default function References() {
	return (
		<div className={styles.App}>
			<NavBar></NavBar>
			<Spacer></Spacer>
			<Spacer></Spacer>
			<div className={styles.infoHeader}>References</div>
			<a href="https://www.ign.com/articles/space-tourism-booking-galactic-getaway-all-you-need-to-know">https://www.ign.com/articles/space-tourism-booking-galactic-getaway-all-you-need-to-know</a>
            <br />
            <a href="https://www.nasa.gov/multimedia/imagegallery/index.html">https://www.nasa.gov/multimedia/imagegallery/index.html</a>
            <br />
            <a href=""></a>
		</div>
	)
}
