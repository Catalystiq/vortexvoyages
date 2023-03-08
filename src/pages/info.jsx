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
								Vortex Voyages provides a reliable and safe rocket recovery system in order to bring its space tourism customers back to earth.
								We use safe and patented parachute technology in order to safely bring back tourists from space and land them safely in the ocean.
								We also use a state of the art rocket recovery reusability system in order to bring back parts of the rocket after they have been used
								to escape earths atmosphere. This allows us to reuse the rocket and dramitcally reduce the cost of space tourism for our customers.
							</p>
							<br />
							<p className={styles.squareAttribution}>Photo by <a className={styles.squareLink} href="https://unsplash.com/@spacex?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">SpaceX</a> on <a className={styles.squareLink} href="https://unsplash.com/photos/MEW1f-yu2KI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
						</div>
					</div>
					<div className={styles.square}>
						<div className={styles.squareTextWrapper}>
							<h1>Training</h1>

							<p>
								Vortex Voyages ensures that training for astronauts is a critical aspect of space tourism, as it ensures the safety of the passengers 
								and the success of the mission. In order to be prepared for space flight, astronauts must first undergo rigorous physical training such as 
								running, weightlifting, and swimming. Astronauts will also be trained in zero-gravity environments and trained in situations such as launch, 
								orbit, and reentry so they can prepare for emergency sitations and develop problem-solving skills. Astronauts will also be trained in the 
								operation of spacecraft, space suits, and other equipment, as well as team-building and communication skills as well.
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
								Vortex Voyages uses the latest in spacecraft technology to provide a safe and reliable space tourism experience for our customers.
								For our orbital flights, we use crewed spacecrafts that are capable of carrying up to 6 passengers and 2 crew members that can carry
								passengers on multi-day trips around Earth. For our lunar flights, we use capable spacecraft that can land on the moon that can
								carry up to 4 passengers and 2 crew members and that can carry passengers on multi-day trips on the moon. For our martian flights,
								we use spacecraft that can land on Mars that can carry up to 4 passengers and 2 crew members that can carry passengers on multi-day trips on Mars.
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
