import { FC, Key } from "react";
import { Box } from "@mui/material";
import { useRouter } from 'next/router';

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





export const ArticleDetails: FC<IDataArticles> = ({
	key,
	id,
	title,
	excerpt,
	month,
	day,
	content,
	slug,
	category,
	thumbnail,
})=> {


    return (
        <>
        <Box > twój stary</Box>

        </>
    )
}