import { Box, Link } from '@mui/material';

export default function PartnersBox() {

	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				color: 'white',
			}}
		>
			<Box sx={{ margin: '20px' }}>
				<Link
					href='https://unimind-dao.com/'
					underline='none'
					sx={{ color: 'white' }}
				>
					Contact
				</Link>
			</Box>
			<Box sx={{ margin: '20px' }}>
				<Link
					href='https://twitter.com/UnimindDAO'
					sx={{ color: 'white' }}
					underline='none'
				>
					Webtrzy.xyz
				</Link>
			</Box>
			<Box sx={{ margin: '20px' }}>
				<Link
					href='https://nftpolska.net/'
					sx={{ color: 'white' }}
					underline='none'
				>
					NFTPolska
				</Link>
			</Box>
		</Box>
	);
}
