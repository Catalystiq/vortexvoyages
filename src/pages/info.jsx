import styles from '@/styles/Info.module.css'
import NavBar from '@/components/NavBar'
import Spacer from '@/components/Spacer'
import Image from 'next/image'

export default function Info() {
	return (
		<div className={styles.App}>
			<NavBar></NavBar>
			<Spacer></Spacer>
			<Spacer></Spacer>
			<div className={styles.infoHeader}>Information</div>
			<div className={styles.wrapper}>
				<div className={styles.squares}>
					<div className={styles.square}>
						<div className={styles.squareTextWrapper}>
							<h1>Launch</h1>

							<p>
							Vortex Voyages provides a reliable and safe rocket launch system in order to send its space tourism customers into space.
							Using a state of the art vertical takeoff system, Vortex Voyages uses focuses on high safety and reliability to deliver the
							 best experience for our customers. We have invested in high-quality materials, advanced technology, 
							and rigorous testing procedures to ensure that our rockets are capable of launching safely and providing a thrilling and 
							unforgettable space tourism experience.
							</p>
							<br />
							<p className={styles.squareAttribution}>Photo by <a className={styles.squareLink}href="https://unsplash.com/@spacex?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">SpaceX</a> on <a className={styles.squareLink} href="https://unsplash.com/photos/-p-KCm6xB9I?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
						</div>

						<div className={styles.squareTextWrapper}>
							<img src="https://storage.googleapis.com/vortexvoyages-images/images/launch.jpg" alt="rocket launching"/>
						</div>
					</div>

					<div className={styles.square}>
						<div className={styles.squareTextWrapper}>
							<img src="https://storage.googleapis.com/vortexvoyages-images/images/recovery.jpg" alt="rocket recovery"/>
						</div>

						<div className={styles.squareTextWrapper}>
							<h1>Recovery</h1>

							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
								sint vel praesentium esse obcaecati molestiae! Aspernatur ea
								repellendus qui debitis quibusdam magnam, commodi animi amet,
								dolorem placeat reprehenderit ex nisi labore! Ad deserunt illum
								corporis beatae aperiam totam at? Aliquid iure aspernatur
								tempore tenetur magnam voluptates repudiandae molestias facere
								hic!
							</p>
							<br />
							<p className={styles.squareAttribution}>Photo by <a className={styles.squareLink} href="https://unsplash.com/@spacex?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">SpaceX</a> on <a className={styles.squareLink} href="https://unsplash.com/photos/MEW1f-yu2KI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
						</div>
					</div>
					<div className={styles.square}>
						<div className={styles.squareTextWrapper}>
							<h1>Training</h1>

							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
								sint vel praesentium esse obcaecati molestiae! Aspernatur ea
								repellendus qui debitis quibusdam magnam, commodi animi amet,
								dolorem placeat reprehenderit ex nisi labore! Ad deserunt illum
								corporis beatae aperiam totam at? Aliquid iure aspernatur
								tempore tenetur magnam voluptates repudiandae molestias facere
								hic!							
							</p>
							<br />
							<p className={styles.squareAttribution}>Photo by <a className={styles.squareLink} href="https://unsplash.com/@sammoghadamkhamseh?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sam Moghadam Khamseh</a> on <a className={styles.squareLink} href="https://unsplash.com/photos/Z4Q9KHw9ofE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
						</div>

						<div className={styles.squareTextWrapper}>
							<img src="https://storage.googleapis.com/vortexvoyages-images/images/training.jpg" alt="rocket launching"/>
						</div>
					</div>
					<div className={styles.square}>
						<div className={styles.squareTextWrapper}>
							<img src="https://storage.googleapis.com/vortexvoyages-images/images/vehicles.jpg" alt="rocket recovery"/>
						</div>

						<div className={styles.squareTextWrapper}>
							<h1>Vehicles</h1>

							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
								sint vel praesentium esse obcaecati molestiae! Aspernatur ea
								repellendus qui debitis quibusdam magnam, commodi animi amet,
								dolorem placeat reprehenderit ex nisi labore! Ad deserunt illum
								corporis beatae aperiam totam at? Aliquid iure aspernatur
								tempore tenetur magnam voluptates repudiandae molestias facere
								hic!
							</p>
							<br />
							<p className={styles.squareAttribution}>Photo by <a className={styles.squareLink} href="https://unsplash.com/@spacex?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">SpaceX</a> on <a className={styles.squareLink} href="https://unsplash.com/photos/GDdRP7U5ct0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
