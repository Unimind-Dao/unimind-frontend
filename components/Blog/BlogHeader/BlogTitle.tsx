import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import theme from 'theme/theme';

const BlogTitle = () => {
	const matches = useMediaQuery(theme.breakpoints.down('md'));
	const sx = {
		width: '700px',
		height: 'auto',
		display: 'flex',
		flexDirection: 'column',
		flexWrap:'wrap',
		margin: matches ? "100px 20px 50px 20px" : "100px 0px 50px 0px" ,
		
	};

	return (
		<Box sx={sx}>
			<Typography variant={matches ? 'h3' : 'h2'}>
				The UNIMIND.DAO Blog
			</Typography>
			<Typography
				variant={matches ? 'h6' : 'h3'}
				color={'rgba(17, 17, 17, 0.7)'}
			>
				Stay up date with latest stories in the web 3.0 world
			</Typography>
		</Box>
	);
};

export default BlogTitle;
