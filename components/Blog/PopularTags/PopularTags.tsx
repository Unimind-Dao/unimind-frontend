import { Box, Typography } from '@mui/material';
import React from 'react';
import Tags from './Tags';

const PopularTags = () => {
	return (
		<Box>
			<Typography variant='h3'>Popular Tags</Typography>
			<Tags></Tags>
		</Box>
	);
};

export default PopularTags;
