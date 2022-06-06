import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import styles from './Footer.module.css';

 export default function FirstBox () {

    return (
			<div className={styles.firstBox}>
				<div className={styles.LogoMainBox}>
					<p>unimind.dao</p>
					<p>Be where the change happens</p>
				</div>
				<div className={styles.socialMainBox}>
					<div className={styles.partnersBox}>
						<TwitterIcon />
					</div>
					<div className={styles.partnersBox}>
						<YouTubeIcon />
					</div>
					<div className={styles.partnersBox}>
						<YouTubeIcon />
					</div>
				</div>
			</div>
		);
}