import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import theme from 'theme/theme';

import ArticlesPlace from '../ArticlesPlace/ArticlesPlace';
import Authors from '../Authors';
import PopularTags from '../PopularTags/PopularTags';

import BlogTitle from './BlogTitle';

const Blog = () => {
	const matches = useMediaQuery(theme.breakpoints.down('md'));

	const sx = {
		width: '100%',
		height: 'auto',
		display: 'flex',
		flexDirection: 'row',
	};

	return (
		<>
			<Box
				sx={{
					width: matches ? '100%' : '1700px',
					margin: 'auto',
				}}
			>
				<Box sx={sx}>
					<BlogTitle />
				</Box>
				{matches === true ? null : (
					<>
						<PopularTags />
						<Authors />
					</>
				)}
				<ArticlesPlace />
			</Box>
		</>
	);
};

export default Blog;
