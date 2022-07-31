import { Box} from '@mui/system';
import React from 'react';

export default function Footer() {
	const sx = {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		color: 'white',
	};

	return (
		<Box sx={sx}>
			<p>2022 unimind.dao</p>
		</Box>
	);
}
