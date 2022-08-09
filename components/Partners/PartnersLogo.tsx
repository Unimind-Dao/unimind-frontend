import { Box } from '@mui/material';
import Image from 'next/image';

import scio from '../../assets/logo/scio.jpg';
import swiatweb3 from '../../assets/logo/swiatweb3.png';
import web3devs from '../../assets/logo/web3devs.jpg';
import webtrzy from '../../assets/logo/webtrzy.png';





const PartnersLogo = () => {


	const sx = {
		display: 'flex',
		flexWrap: 'wrap',
		height: 'auto',
		margin: 'auto',
		alignItems: 'center',
		justifyContent: 'center',
	};

	return (
		<>
			<Box sx={sx}>
				<Box sx={{ margin: '20px' }}>
					<Image src={swiatweb3} alt='swiatweb3' width='300' height='64' />
				</Box>
				<Box sx={{ margin: '20px' }}>
					<Image src={scio} alt='scio' width='300' height='100' />
				</Box>
				<Box sx={{ margin: '20px' }}>
					<Image src={web3devs} alt='web3devs' width='200' height='200' />
				</Box>
				<Box sx={{ margin: '20px' }}>
					<Image src={webtrzy} alt='webtrzy' width='300' height='50' />
				</Box>
			</Box>
		</>
	);
};

export default PartnersLogo;
