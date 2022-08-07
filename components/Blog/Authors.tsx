import { Box, Typography } from '@mui/material';
import React from 'react';
import useSWR from 'swr';
import axios from 'axios';
import TeammateButton from '../TeammateButton/TeammateButton';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const Authors = () => {
	const { data, error } = useSWR(
		'https://www.unimind.website/api/blog/team',
		fetcher
	);

	return (
		<>
			<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
				<Typography variant='h3' sx={{ marginRight: '30px' }}>
					Authors
				</Typography>
				{data?.map((mate) => {
					return <TeammateButton name={mate.name} thumbnail={mate.thumbnail} />;
				})}
			</Box>
		</>
	);
};

export default Authors;
