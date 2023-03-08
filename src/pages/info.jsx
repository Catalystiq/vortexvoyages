import styles from '@/styles/Info.module.css'
import NavBar from '@/components/NavBar'
import Spacer from '@/components/Spacer'

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
							Returning to Earth can be a challenge, but here at Vortex Voyages, we have created a safe way to come home.
							 Venture Landing Shuttle has been tested over hundreds of flights and is constantly being updated. Our landing
							  route limits the amount of G-force upon reentry; however, it is still a thrilling and straining experience.
							   Once breaking through the atmosphere, the shuttle will glide to our recovery complex in Florida, where it 
							   will land safely. Once there, you will be taken care of for a day or two to ensure you are adjusted back to Earth. 
							   You will stay at our luxury resort while you make your recovery.
							</p>
							<br />
							<p className={styles.squareAttribution}>Photo by <a className={styles.squareLink} href="https://unsplash.com/@spacex?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">SpaceX</a> on <a className={styles.squareLink} href="https://unsplash.com/photos/MEW1f-yu2KI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
						</div>
					</div>
					<div className={styles.square}>
						<div className={styles.squareTextWrapper}>
							<h1>Training</h1>

							<p>
							Before taking flight, you must take our training course to ensure maximum safety. Three months before your launch date,
							 you will be instructed to take our online course to learn about all of our systems and proper safety regulations. After
							  completing the online course, you will be flown to our Zero-G Training Facility in Nevada, where you can learn how to
							   maneuver in Zero-G. Also, while there, you will learn more about our rockets and experience simulated drills. Our pool
							    will allow you to feel what zero G would feel like. At this time, you will be assigned a guide that will answer all
								 questions and will train you personally. Finally, you will meet at our launch facility one day before your launch
								  to get the final briefing and instructions. After that, it is off to the stars.
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
							Votex Voyages employees are well-tested equipment to deliver an awing experience.
							 Are low Earth orbit launches will be carried out by our Venture Five rocket, which
							  supports ten people for launch. It specializes in taking passengers and personnel
							   to our Solar Resort in Earths orbit. Our Venture Seven rockets allow for journies
							    to the moon. They offer a bigger cabin size for the three-day journey. The Venture
								 Eleven rocket is the flagship of Vortex Voyages. Venture Eleven opens the door to
								  Mars-style packages as it is one of the biggest rockets we operate. We currently
								   have two primary stations, Solar Resorts, and the Lunar Base. Solar Resorts give
								    the experience of sleeping among the stars while our Luner Base allows you to walk
									 on uncharted ground. Both facilities offer many luxurious experiences for you to enjoy.
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
