import React from "react";

import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Grid, GridProps } from "@mui/material";

import DiscordIcon from "../svg/Discord";
import { CustomLink } from "../CustomLink";

export const SocialLinks = (props: GridProps) => {
  return (
    <Grid container columnSpacing={4} {...props}>
      <Grid item>
        <CustomLink href={process.env.NEXT_PUBLIC_TWITTER_LINK} target="_blank">
          <TwitterIcon sx={{ color: "white" }} />
        </CustomLink>
      </Grid>
      <Grid item>
        <CustomLink
          href={process.env.NEXT_PUBLIC_DISCORD_INVITE_LINK}
          target="_blank"
        >
          <DiscordIcon />
        </CustomLink>
      </Grid>
      <Grid item>
        <CustomLink
          href={process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_LINK}
          target="_blank"
        >
          <YouTubeIcon sx={{ color: "white" }} />
        </CustomLink>
      </Grid>
    </Grid>
  );
};
