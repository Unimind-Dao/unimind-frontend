import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/system/Box';
import { SocialLinks } from '../../../SocialLinks/SocialLinks';
import Discord from './../../../svg/Discord';
import { Link } from '@mui/material';
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
