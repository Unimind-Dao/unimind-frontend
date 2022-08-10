import React from 'react';
import { ThemeProvider } from '@mui/system';

import Blog from '../components/Blog/BlogHeader/Blog';
import Footer from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import theme from '../theme/theme';

const BlogPage = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Header />

				<Blog/>
				<Footer />
			</ThemeProvider>

		</>
	);
};

export default BlogPage;
