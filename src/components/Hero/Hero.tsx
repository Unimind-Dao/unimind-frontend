import { Box, Grid, Typography } from "@mui/material";
import { JoinCommunityButton } from "../JoinCommunityButton";
import { SocialLinks } from "../SocialLinks";

export const Hero = () => {
  return (
    <Grid
      sx={{
        backgroundColor: "#1b1b1b",
      }}
    >
      <Box
        sx={{ flexBasis: "0.5", width: "50%" }}
        py={0}
        px={{ xs: "100px", lg: "190px" }}
      >
        <Typography
          variant="h1"
          color="white"
          fontSize="38px"
          fontWeight="bold"
          lineHeight="48px"
          pb={3}
          pt={12}
        >
          Be where the change happens with UNIMIND.DAO
        </Typography>
        <Typography
          variant="h2"
          color="white"
          fontSize="20px"
          lineHeight={1.5}
          pb={6}
        >
          First and only DAO Community in Poland created by people for people.
          The place where you will gain knowledge, build your network and go
          deep into the web 3.0 world.
        </Typography>
        <JoinCommunityButton />
        <SocialLinks pt={7} />
      </Box>
    </Grid>
  );
};
