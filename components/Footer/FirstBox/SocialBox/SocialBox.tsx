
import Box from '@mui/system/Box';
import { SocialLinks } from '../../../SocialLinks/SocialLinks';

const SocialBox = () => {
	return (
		<Box
			sx={{
				width: '10%',
				display: 'flex',
				flexDirection: ' row',
				justifyContent: 'center',
				alignItems: 'center',
				color: 'white',
				marginRight: ' 100px',
			}}
		>
			<SocialLinks />
		</Box>
	);
};

export default SocialBox;