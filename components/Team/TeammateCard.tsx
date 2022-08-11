import { Key } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Avatar, Box, Card, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import DiscordIcon from "../svg/Discord";

type IData = {
  id: string;
  name: string;
  slug: string;
  role: string;
  thumbnail: string;
  discord: string;
  twitter: string;
  linkedin: string;
  nick: string;
};

export default function TeamMateCard({
  slug,
  name,
  role,
  nick,
  thumbnail,
  discord,
  twitter,
  linkedin,
  id,
}: IData) {
  const sx = {
    height: "310px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    background:
      "linear-gradient(180deg, rgba(17, 210, 172, 0.3) 0%, rgba(17, 210, 172, 0) 100%);",
    margin: "20px",
  };

  const socialLinks = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  };

  return (
    <>
      <Card sx={sx} key={id} id={id}>
        <Avatar
          alt={name}
          src={thumbnail}
          sx={{ width: "80px", height: "80px" }}
        />
        <Typography m={5}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ color: "#11D2AC" }}>{name}</Box>
            <Box sx={{ color: "white" }}>{nick}</Box>
            <Box sx={{ color: "gray" }}>{role}</Box>
          </Box>
        </Typography>
        <Box sx={socialLinks}>
          <IconButton href={twitter}>
            <TwitterIcon
              sx={{ color: "white", width: "24px", height: "24px" }}
            />
          </IconButton>
          <IconButton href={linkedin}>
            <LinkedInIcon
              sx={{ color: "white", width: "24px", height: "24px" }}
            />
          </IconButton>
          <IconButton
            href={discord}
            aria-label="delete"
            sx={{ marginTop: "5px" }}
          >
            <DiscordIcon />
          </IconButton>
        </Box>
      </Card>
    </>
  );
}
