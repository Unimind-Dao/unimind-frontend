import React from 'react';
import { ThemeProvider } from '@mui/system';
import BlogHeader from '../components/Blog/BlogHeader';
import Footer from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import theme from '../theme/theme';

const Blog = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Header />

				<BlogHeader />

				<Footer />
			</ThemeProvider>
		</>
	);
};

export default Blog;
