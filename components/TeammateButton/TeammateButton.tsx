import React, { Key } from 'react';
import { Avatar, Button, Typography } from '@mui/material';

const TeammateButton = ({
	name,
	thumbnail,
}: {
	name: string;
	thumbnail: string;
}) => {
	const sx = {
		width: 'auto',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	};

	return (
		<>
			<Button sx={sx}>
				<Avatar
					alt={name}
					src={thumbnail}
					sx={{ width: '30px', height: '30px' }}
					color='grey'
				/>
				<Typography>{name} "(12 arcticles)"</Typography>
			</Button>
		</>
	);
};

export default TeammateButton;
