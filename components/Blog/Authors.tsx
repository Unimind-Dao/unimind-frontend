import React, { Key } from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import useSWR from 'swr';

import TeammateButton from '../TeammateButton/TeammateButton';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

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
				{data?.map(
					(mate: {
						name: string;
						thumbnail: string ;
					}) => {
						return (
							<TeammateButton
								key={mate.name}
								name={mate.name}
								thumbnail={mate.thumbnail}
							/>
						);
					}
				)}
			</Box>
		</>
	);
};

export default Authors;
