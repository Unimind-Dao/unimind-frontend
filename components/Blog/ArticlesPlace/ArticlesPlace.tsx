import { Key } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
import useSWR from 'swr';

import ArticleCard from './ArticleCard';

interface IDataArticles {
	key: number;
	id: any | number | Key;
	title: string;
	slug: string;
	category: string;
	thumbnail: string;
	excerpt: string;
	month: string;
	day: string;
	content: string;
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);
const ArticlesPlace = () => {
	const { data, error } = useSWR(
		'https://www.unimind.website/api/blog/',
		fetcher
	);

	return (
		<>
			<Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width:'100%'}}>
				{data?.map((article: IDataArticles) => {
					return (
						<ArticleCard
							key={article.id}
							id={article.id}
							title={article.title}
							excerpt={article.excerpt}
							month={article.month}
							day={article.day}
							content={article.content}
							slug={article.slug}
							category={article.category}
							thumbnail={article.thumbnail}
						/>
					);
				})}
			</Box>
		</>
	);
};

export default ArticlesPlace;
