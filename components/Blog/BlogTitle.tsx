import { Box, Typography, useTheme } from '@mui/material';
import React from "react";



const BlogTitle = () => {
   


    const sx = { width: '700px', height:'auto', display:'flex', flexDirection: 'column' }

    return (
			<Box sx={sx}>
				<Typography variant='h2'>The UNIMIND.DAO Blog</Typography>
				<Typography variant='h3' color={'rgba(17, 17, 17, 0.7)'}>
					
					Stay up date with latest stories in the web 3.0 world
				</Typography>
			</Box>
		);
}




export default BlogTitle;