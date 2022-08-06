import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Grid, GridProps } from "@mui/material";

import DiscordIcon from "../svg/Discord";

export const SocialLinks = (props: GridProps) => {
  return (
    <Grid container columnSpacing={4} {...props}>
      <Grid item>
        <TwitterIcon sx={{ color: "white" }} />
      </Grid>
      <Grid item>
        <DiscordIcon />
      </Grid>
      <Grid item>
        <YouTubeIcon sx={{ color: "white" }} />
      </Grid>
    </Grid>
  );
};
