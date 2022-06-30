// import { TwitterIcon, YouTubeIcon } from '@mui/icons-material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FirstBox from './FirstBox/FirstBox';
import PartnersBox from './PartnersBox';
import EndBox from './EndBox';
import Box from '@mui/system/Box';

export default function Footer() {
	const sx = { width: '100%', height: '32vh', bgcolor: '#1B1B1B' };

	return (
		<Box sx={sx}>
			<FirstBox />
			<PartnersBox />
			<EndBox />
		</Box>
	);
}
