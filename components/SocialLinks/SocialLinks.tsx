import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Grid, GridProps } from "@mui/material";

export const SocialLinks = (props: GridProps) => {
  return (
    <Grid container columnSpacing={4} {...props}>
      <Grid item>
        <TwitterIcon sx={{ color: "white" }} />
      </Grid>
      <Grid item>
        <YouTubeIcon sx={{ color: "white" }} />
      </Grid>
      <Grid item>Discord</Grid>
    </Grid>
  );
};
