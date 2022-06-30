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
