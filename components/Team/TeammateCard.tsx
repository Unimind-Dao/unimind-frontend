import { Avatar, Box, Card, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DiscordIcon from '../svg/Discord';
import { Key } from 'react';
import React from 'react';
import IconButton from '@mui/material/IconButton';


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

export default function TeamMateCard({
	slug,
	name,
	role,
	thumbnail,
	discord,
	twitter,
	linkedin,
	id,
}: IData) {
	const sx = {
		height: '310px',
		width: '300px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '10px',
		background:
			'linear-gradient(180deg, rgba(17, 210, 172, 0.3) 0%, rgba(17, 210, 172, 0) 100%);',
		margin: '20px'
	};

	const socialLinks = {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		width: '100%',
	};

	return (
		<>
			<Card sx={sx} key={id} id={id}>
				<Avatar
					alt={name}
					src={thumbnail}
					sx={{ width: '80px', height: '80px' }}
				/>
				<Typography m={5} >
					<Box sx={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
					<Box sx={{ color: '#11D2AC' }}>{name}</Box>
					<Box sx={{ color: 'white' }}>{slug}</Box>
					<Box sx={{ color: 'gray' }}>{role}</Box>
					</Box>
				</Typography>
				<Box sx={socialLinks}>
					<IconButton href={twitter}>
						<TwitterIcon
							sx={{ color: 'gray', width: '30px', height: '30px' }}
						/>
					</IconButton>
					<IconButton href={linkedin}>
						<LinkedInIcon
							sx={{ color: 'gray', width: '30px', height: '30px' }}
						/>
					</IconButton>
					<IconButton aria-label='delete'>
						<DiscordIcon />
					</IconButton>
				</Box>
			</Card>
		</>
	);
}
