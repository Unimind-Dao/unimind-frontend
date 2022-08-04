import { Box } from '@mui/material';
import React from 'react';
import SmallButton from '../../SmallButton/SmallButton';

const Tags = () => {

	const labelTags = [
		{ label: 'Metaverse' },
		{ label: 'Blockchain' },
		{ label: 'NFT' },
		{ label: 'Cryptocurrency' },
		{ label: 'Announcement' },
		{ label: 'Webtrzy.xyz' },
	];

	return (
		<>
			{labelTags?.map((tag: { label: string }) => {
				return (
					<SmallButton
						key={tag.label.toString()}
						label={tag.label}
						color='rgba(14, 176, 144, 1)'
						backgroundColor='rgba(14, 176, 144, 0.12)'
                        margin='0px 30px 0px 0px'
					/>
				);
			})}
		</>
	);
};

export default Tags;
