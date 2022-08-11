import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import axios from "axios";
import useSWR from "swr";

import ArticleDetails from "./ArticleDetails";

interface IDataArticles {
  key: number;
  id: number;
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

const Article = () => {
  // const matches = useMediaQuery(theme.breakpoints.down('md'));
  const { data, error } = useSWR(
    "https://www.unimind.website/api/blog/",
    fetcher
  );

  return (
    <>
      <Box
        sx={{
          // width: matches ? '100%' : '75ch',
          margin: "auto",
        }}
      >
        {/* {data?.map((article: IDataArticles) => {
          return (
            <ArticleDetails
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
        })} */}
        <ArticleDetails
						key={0}
						id={undefined}
						title={''}
						slug={''}
						category={''}
						thumbnail={''}
						excerpt={''}
						month={''}
						day={''}
						content={''}
					/>
      </Box>
    </>
  );
};

export default Article;
