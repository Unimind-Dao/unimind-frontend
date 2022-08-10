import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/system/Box';

import theme from '../../../theme/theme';

import LogoBox from './LogoBox/LogoBox';
import SocialBox from './SocialBox/SocialBox';

export default function FirstBox() {
	const matches = useMediaQuery(theme.breakpoints.down('md'));

	const sx = {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: matches ? 'center' : 'flex-start',
		alignItems: 'center',
		color: 'white',
		marginLeft: '0',
	};

	return (
		<>
			<Box sx={sx}>
				<LogoBox />
			</Box>
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: matches ? 'center' : 'flex-end',
					alignItems: 'center',
					color: 'white',
				}}
			>
				<SocialBox />
			</Box>
		</>
	);
}
