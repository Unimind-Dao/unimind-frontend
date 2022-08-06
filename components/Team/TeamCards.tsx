import { Box } from "@mui/material";
import axios from "axios";
import useSWR from "swr";

import TeammateCard from "./TeammateCard";

type IData = {
  id: string;
  name: string;
  slug: string;
  role: string;
  thumbnail: string;
  discord: string;
  twitter: string;
  linkedin: string;
};

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const TeamCards = () => {
  const { data, error } = useSWR(
    "https://www.unimind.website/api/blog/team",
    fetcher
  );

  const sx = {
    display: "flex",
    flexWrap: "wrap",
    heigth: "auto",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <Box sx={sx}>
        {data?.map((users: IData) => {
          return (
            <TeammateCard
              id={users.id}
              key={users.id}
              slug={users.slug}
              name={users.name}
              role={users.role}
              thumbnail={users.thumbnail}
              discord={users.discord}
              twitter={users.twitter}
              linkedin={users.linkedin}
            />
          );
        })}
      </Box>
    </>
  );
};

export default TeamCards;
