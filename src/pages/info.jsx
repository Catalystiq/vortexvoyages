import styles from '@/styles/Info.module.css'
import NavBar from '@/components/NavBar'
import Spacer from '@/components/Spacer'

export default function Info() {
	return (
		<div className={styles.App}>
			<NavBar></NavBar>
			<Spacer></Spacer>
			<div className={styles.wrapper}>
				<div className={styles.squares}>
					<div className={styles.square}>
						<div className={styles.squareTextWrapper}>
							<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>

							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
								sint vel praesentium esse obcaecati molestiae! Aspernatur ea
								repellendus qui debitis quibusdam magnam, commodi animi amet,
								dolorem placeat reprehenderit ex nisi labore! Ad deserunt illum
								corporis beatae aperiam totam at? Aliquid iure aspernatur
								tempore tenetur magnam voluptates repudiandae molestias facere
								hic!
							</p>
						</div>

						<div className={styles.squareTextWrapper}>
							<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>

							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
								sint vel praesentium esse obcaecati molestiae! Aspernatur ea
								repellendus qui debitis quibusdam magnam, commodi animi amet,
								dolorem placeat reprehenderit ex nisi labore! Ad deserunt illum
								corporis beatae aperiam totam at? Aliquid iure aspernatur
								tempore tenetur magnam voluptates repudiandae molestias facere
								hic!
							</p>
						</div>
					</div>

					<div className={styles.square}>
						<div className={styles.squareTextWrapper}>
							<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>

							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
								sint vel praesentium esse obcaecati molestiae! Aspernatur ea
								repellendus qui debitis quibusdam magnam, commodi animi amet,
								dolorem placeat reprehenderit ex nisi labore! Ad deserunt illum
								corporis beatae aperiam totam at? Aliquid iure aspernatur
								tempore tenetur magnam voluptates repudiandae molestias facere
								hic!
							</p>
						</div>

						<div className={styles.squareTextWrapper}>
							<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>

							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
								sint vel praesentium esse obcaecati molestiae! Aspernatur ea
								repellendus qui debitis quibusdam magnam, commodi animi amet,
								dolorem placeat reprehenderit ex nisi labore! Ad deserunt illum
								corporis beatae aperiam totam at? Aliquid iure aspernatur
								tempore tenetur magnam voluptates repudiandae molestias facere
								hic!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
