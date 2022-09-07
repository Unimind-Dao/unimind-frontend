import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Avatar, Box, Card, Typography } from "@mui/material";
import Image from "next/image";

import { CustomLink } from "@/components/CustomLink";

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
  return (
    <>
      <Card sx={sx} key={id} id={id}>
        <Avatar sx={{ width: "80px", height: "80px" }}>
          <Image alt={name} src={thumbnail} width={80} height={80} />
        </Avatar>
        <Box m={5}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography fontSize={18} fontWeight="bold" color={"#11D2AC"}>
              {name}
            </Typography>
            <Typography fontSize={14} fontWeight="600" color="white">
              {nick}
            </Typography>
            <Typography fontSize={14} color="gray" sx={{ color: "gray" }}>
              {role}
            </Typography>
          </Box>
        </Box>
        <Box sx={socialLinks}>
          <CustomLink
            aria-label="twitter icon link"
            href={twitter}
            target="_bland"
            rel="noopener noreferrer"
          >
            <TwitterIcon
              sx={{ color: "white", width: "24px", height: "24px" }}
            />
          </CustomLink>
          <CustomLink
            aria-label="linkedin icon link"
            href={linkedin}
            target="_bland"
            rel="noopener noreferrer"
          >
            <LinkedInIcon
              sx={{ color: "white", width: "24px", height: "24px" }}
            />
          </CustomLink>
          <CustomLink
            href={discord}
            target="_bland"
            rel="noopener noreferrer"
            aria-label="discord icon link"
            sx={{ marginTop: "5px" }}
          >
            <DiscordIcon />
          </CustomLink>
        </Box>
      </Card>
    </>
  );
}
