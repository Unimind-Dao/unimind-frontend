import styles from './Footer.module.css';

 export default function PartnersBox () {

    return (
			<div className={styles.partnersMainBox}>
				<div className={styles.partnersBox}>
					<a>Contact</a>
				</div>
				<div className={styles.partnersBox}>
					<a>Webtrzy.xyz</a>
				</div>
				<div className={styles.partnersBox}>
					<a>NFTPolska</a>
				</div>
			</div>
		);
 }