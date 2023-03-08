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
			<a className={styles.reference}href="https://www.ign.com/articles/space-tourism-booking-galactic-getaway-all-you-need-to-know">https://www.ign.com/articles/space-tourism-booking-galactic-getaway-all-you-need-to-know</a>
            <br />
            <a className={styles.reference} href="https://www.nasa.gov/multimedia/imagegallery/index.html">https://www.nasa.gov/multimedia/imagegallery/index.html</a>
            <br />
            <br />
            <a className={styles.reference} href="https://drive.google.com/file/d/1LswpDvL2oQ-3s1ERS_GwP20YUH1psLO2/view?usp=share_link">TSA Work Log</a>
            <br />
            <a className={styles.reference} href="https://drive.google.com/file/d/1RzYjr18SbRnmN0G6o9sqTrJ_wB16ulqb/view?usp=share_link">TSA Copyright Checklist</a>
		</div>
	)
}
