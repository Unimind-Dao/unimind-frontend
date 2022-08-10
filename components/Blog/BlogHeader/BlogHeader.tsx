import React from 'react';
import { Box } from '@mui/material';

import ArticlesPlace from '../ArticlesPlace/ArticlesPlace';
import Authors from '../Authors';
import PopularTags from '../PopularTags/PopularTags';

import BlogTitle from './BlogTitle';

const BlogHeader = () => {
	const sx = {
		width: '100%',
		height: 'auto',
		display: 'flex',
		flexDirection: 'row',
	};

	return (
		<>
			<Box sx={{ width: '1700px', margin: 'auto' }}>
				<Box sx={sx}>
					<BlogTitle />
				</Box>
				<PopularTags />
				<Authors />
				<ArticlesPlace />
			</Box>
		</>
	);
};

export default BlogHeader;
