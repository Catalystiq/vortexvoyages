import styles from '@/styles/PricingText.module.css'
import Spacer from '@/components/Spacer'

export default function PricingText() {
	return (
		<div className={styles.PricingTextWrapper}>
			<div className={styles.PricingTextGrid}>
				<div className={styles.PricingText}>
					<h1>Lorem, ipsum dolor.</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
						ducimus, aut, enim a illo autem amet deserunt ratione sequi, eum
						assumenda vero? Voluptates, ratione distinctio.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
						ducimus, aut, enim a illo autem amet deserunt
					</p>
				</div>
				<Spacer></Spacer>
				<Spacer></Spacer>
				<div className={styles.PricingText}>
					<h1>Lorem, ipsum dolor.</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
						ducimus, aut, enim a illo autem amet deserunt ratione sequi, eum
						assumenda vero? Voluptates, ratione distinctio.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
						ducimus, aut, enim a illo autem amet deserunt
					</p>
				</div>
			</div>
		</div>
	)
}
