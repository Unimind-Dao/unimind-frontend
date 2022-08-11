import { FC, Key } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

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

const BlogCard: FC<IDataArticles> = ({
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
}) => {
  const router = useRouter();
  return (
    <>
      {" "}
      <Link href={`posts/${id}`}>
        <Card
          id={id}
          sx={{ maxWidth: "370px ", maxHeight: "434px", margin: "20px" }}
        >
          <CardActionArea onClick={() => router.push(`posts/${id}`)}>
            <CardMedia
              component="img"
              height="242"
              width="370"
              src={thumbnail}
              alt={category}
            />
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItem: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  sx={{ marginRight: "10px" }}
                  gutterBottom
                  component="div"
                >
                  Saczyy
                </Typography>
                <Typography
                  sx={{ marginRight: "10px" }}
                  gutterBottom
                  component="div"
                >
                  {month}/{day}
                </Typography>
                <Typography gutterBottom component="div">
                  3 min read
                </Typography>
              </Box>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {excerpt}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </>
  );
};

export default BlogCard;
