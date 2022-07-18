import { Box } from '@mui/material';
import TeammateCard from './TeammateCard';
import { GetStaticProps } from 'next';
import React from 'react';

type ICards = {
	data: IData[];
	cards: IData[];
};

type IData = {
	id: string;
	name: string;
	slug: string;
	role: string;
	thumbnail: string;
	discord: string;
	twitter: string;
	linkedin: string;
};

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch('https://www.unimind.website/api/blog/team');
	const { data }: ICards = await res.json();
	console.log('cos', data);
	return {
		props: {
			cards: data,
		},
	};
};

const TeamCards = ({ cards }: ICards) => {
	const sx = { display: 'flex', flexDirection: 'row' };

	console.log('dane', cards);

	return (
		<>
			<Box sx={sx}>
				{cards?.map((team: IData) => {
					return (
						<TeammateCard
							id={team.id}
							key={team.id}
							slug={team.slug}
							name={team.name}
							role={team.role}
							thumbnail={team.thumbnail}
							discord={team.discord}
							twitter={team.twitter}
							linkedin={team.linkedin}
						/>
					);
				})}
			</Box>
		</>
	);
};

export default TeamCards;
