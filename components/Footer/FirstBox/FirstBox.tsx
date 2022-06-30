import Box from '@mui/system/Box';
import LogoBox from './LogoBox/LogoBox';
import SocialBox from './SocialBox/SocialBox';

export default function FirstBox() {
	return (
		<>
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					color: 'white',
				}}
			>
				<LogoBox />
				<SocialBox />
			</Box>
		</>
	);
}
